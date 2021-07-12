using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;
using System.Windows.Threading;
using Saturn.Viewer.Services;
using System.Windows;
using System.Windows.Media.Imaging;
using System.IO;
using System.Threading;
using System.Drawing;
using System.Drawing.Imaging;
using System.Windows.Forms;
using Saturn.Viewer.Extensions;
using Saturn.Viewer.Models;
using System.Drawing.Drawing2D;
using Saturn.Viewer.Models.Extensions;

namespace Saturn.Viewer.Services
{
    public class ResourceDispatcherTimerService
    {

        private readonly DispatcherTimer m_Timer = null;


        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private readonly ConnectorService m_ConnectorService = null;
        private readonly ConnectionService m_ConnectionService = null;
        private readonly ResourceService m_ResourceService = null;
        private readonly ScheduleService m_ScheduleService = null;
        private readonly SceneService m_SceneService = null;

        private volatile int m_bProcess = 0;

        private volatile int m_bExecuted = 0;

        public ResourceDispatcherTimerService(ConnectorService connectorService, ConnectionService connectionService, ResourceService resourceService, ScheduleService scheduleService, SceneService sceneService)
        {
            m_Timer = new DispatcherTimer();

            m_ResourceService = resourceService;
            m_ConnectorService = connectorService;
            m_ConnectionService = connectionService;
            m_ScheduleService = scheduleService;
            m_SceneService = sceneService;
        }

        public void Execute()
        {
            if (Interlocked.Exchange(ref m_bExecuted, 1) == 1)
            {
                return;
            }

            // Debug 모드에서는 5초로 처리한다.
            TimeSpan timeSpan = TimeSpan.FromMinutes(1);
#if DEBUG
            timeSpan = TimeSpan.FromSeconds(5);
#endif

            m_Timer.Interval = timeSpan;
            m_Timer.Tick += TimerDoWorker;
            m_Timer.Start();

            m_Logger.Info($"ScheduleService, Execute Timer, Time : {timeSpan}");
        }


        private async void TimerDoWorker(object sender, EventArgs e)
        {
            if (Interlocked.Exchange(ref m_bProcess, 1) == 1)
            {
                return;
            }

            await m_ConnectorService.CheckPrometheus();

            if (m_ConnectionService.IsConnected)
            {
                var document = DocumentService.Instance.Document;

                // 디바이스의 최신 정보를 얻어온다.
                if (!await m_ConnectorService.GetConnector())
                {
                    //document.Connector = null;
                    //await DocumentService.Instance.SaveAsync();
                }

                var connector = document.Connector;

                if (connector.IsGranted() && connector.HaveScene())
                {
                    bool bMoveNext = false;

                    if (CheckEmergencyScene(connector.EmergencyScene, connector.IsEmergency))
                    {
                        PageService.Instance.MovePage(Models.ApplicationPage.Scene);

                        bMoveNext = true;
                    }
                    else
                    {
                        // 리소스 변경이 있는지 확인한다.
                        bool bDownload = await m_ResourceService.DoUpdate(null);
                        if (bDownload)
                        {
                            m_SceneService.NextSceneId = m_SceneService.CurrentSceneId;

                            // 강제로 페이지를 변경 한다.
                            PageService.Instance.MovePage(Models.ApplicationPage.Scene);

                            bMoveNext = true;
                        }
                        else
                        {

                            if (CheckScheduleScenes())// Check Schedules 
                            {
                                PageService.Instance.MovePage(Models.ApplicationPage.Scene);

                                bMoveNext = true;
                            }

                        }
                    }

                    // 시작 씬이 변경된 경우 (기존 갱신 및 스케줄 처리를 먼저 처리한 후 다음 타임에 처리 한다.)
                    if (!bMoveNext && m_SceneService.StartSceneChanged)
                    {
                        m_SceneService.StartSceneChanged = false;

                        m_SceneService.NextSceneId = m_SceneService.StartSceneId;

                        PageService.Instance.MovePage(Models.ApplicationPage.Scene);
                    }
                }
                else
                {

                    if (!connector.IsGranted())
                    {
                        m_Logger.Info("ResourceDispatcherTimer, Device Removed.");

                        m_Timer.Stop();
                        m_bExecuted = 0;

                        PageService.Instance.MovePage(Models.ApplicationPage.Device);
                    }
                    else if (!connector.HaveScene())
                    {
                        m_Logger.Info("ResourceDispatcherTimer, Device Scene Removed.");

                        m_Timer.Stop();
                        m_bExecuted = 0;

                        PageService.Instance.MovePage(Models.ApplicationPage.DeviceApproval);
                    }
                }
            }
            else
            {

                if (CheckScheduleScenes())// Check Schedules 
                {
                    PageService.Instance.MovePage(Models.ApplicationPage.Scene);
                }

                if (m_ConnectionService.IsConnected)
                {
                    m_Logger.Info("ResourceDispatcherTimerService, TimerDoWorker, Prometheus Connected");
                }
            }


            Interlocked.Exchange(ref m_bProcess, 0);
        }

        private bool CheckEmergencyScene(Scene emergencyScene, bool isEmergency)
        {
            // 긴급 진행 중일 경우 종료 처리
            if (m_SceneService.IsEmergecyScene)
            {
                if (null == emergencyScene || isEmergency == false)
                {
                    m_SceneService.NextSceneId = m_SceneService.StartSceneId;

                    m_SceneService.IsEmergecyScene = false;

                    return true;
                }
            }
            else
            {
                if (null == emergencyScene)
                {
                    return false;
                }

                if (false == isEmergency)
                {
                    return false;
                }


                var currentSceneId = m_SceneService.CurrentSceneId;

                var emergencySceneId = emergencyScene.Base.SceneId;
                if (currentSceneId != emergencySceneId)
                {
                    var brueprint = m_SceneService.FindBlueprint(emergencySceneId);
                    if (null != brueprint)
                    {
                        m_SceneService.NextSceneId = emergencySceneId;

                        m_SceneService.IsEmergecyScene = true;

                        return true;
                    }
                }
            }

            return false;
        }

        /// <summary>
        /// 전체 스케줄 씬을 체크 한다.
        /// </summary>
        /// <returns></returns>
        private bool CheckScheduleScenes()
        {
            Models.ConnectorScheduleScene connectorScheduleScene = null;

            foreach (var schedule in m_ScheduleService.GetSchedules())
            {
                if (CheckSchedule(schedule.ScheduleScene.Schedule))
                {
                    connectorScheduleScene = schedule;

                    break;
                }
            }

            // check activated schedule scene
            if (null == connectorScheduleScene)
            {
                // reset schedule scene 
                var currentConnectorScheduleSceneId = m_ScheduleService.CurrentConnectorScheduleSceneId;
                if (0 < currentConnectorScheduleSceneId)
                {
                    m_ScheduleService.CurrentConnectorScheduleSceneId = 0;

                    connectorScheduleScene = m_ScheduleService.FindConnectorScheduleScene(currentConnectorScheduleSceneId);
                    if (null != connectorScheduleScene)
                    {
                        m_Logger.Info($"ResourceDispatcherTimerService, CheckScheduleScenes, Schedule finished. ConnectorScheduleSceneId : {currentConnectorScheduleSceneId}, ScheduleSceneName : {connectorScheduleScene.ScheduleScene.Name}, SceneId: {m_SceneService.CurrentSceneId}");
                    }
                    else
                    {
                        m_Logger.Error($"ResourceDispatcherTimerService, CheckScheduleScenes, Schedule finished. ConnectorScheduleSceneId : {currentConnectorScheduleSceneId}, ScheduleSceneName : {connectorScheduleScene.ScheduleScene.Name}, SceneId: {m_SceneService.CurrentSceneId}");
                    }

                    var startSceneId = m_SceneService.StartSceneId;

                    m_SceneService.NextSceneId = startSceneId;

                    return true;
                }

                return false;
            }

            // check current connector schedule scene id 
            if (m_ScheduleService.CurrentConnectorScheduleSceneId == connectorScheduleScene.ConnectorScheduleSceneId)
            {
                return false;
            }

            // set current connector schedule scene id 
            m_ScheduleService.CurrentConnectorScheduleSceneId = connectorScheduleScene.ConnectorScheduleSceneId;

            // get next scene id 
            var sceneId = connectorScheduleScene?.ScheduleScene?.SceneBase?.SceneId ?? 0;
            if (0 >= sceneId)
            {
                return false;
            }

            // check scene blueprint by scene id 
            var blueprint = m_SceneService.FindBlueprint(sceneId);
            if (null == blueprint)
            {
                m_Logger.Error($"ResourceDispatcherTimerService, CheckScheduleScenes, Blueprint can not found. SceneId: {sceneId}");

                return false;
            }

            m_Logger.Info($"ResourceDispatcherTimerService, CheckScheduleScenes, Schedule start. ConnectorScheduleSceneId : {connectorScheduleScene.ConnectorScheduleSceneId}, ScheduleSceneName : {connectorScheduleScene.ScheduleScene.Name}, SceneId: {sceneId}");

            // set next scene id 
            m_SceneService.NextSceneId = sceneId;

            return true;
        }

        private bool CheckSchedule(Models.Schedule schedule)
        {
            var current = DateTime.Now;
            // 날짜를 사용하는지 체크
            if (schedule.UseDate)
            {
                var startDate = new DateTime(schedule.StartDate.Year, schedule.StartDate.Month, schedule.StartDate.Day);
                var endDate = new DateTime(schedule.EndDate.Year, schedule.EndDate.Month, schedule.EndDate.Day);

                // current가 크면 -1를 리턴 작다면 1을 같다면 0
                var startResult = DateTime.Compare(startDate, current);
                if (0 < startResult)
                {
                    return false;
                }

                var endResult = DateTime.Compare(current, endDate);
                if (0 < endResult)
                {
                    return false;
                }
            }

            bool bCheckDayOfWeek = false;
            if (schedule.Week != null)
            {
                switch (current.DayOfWeek)
                {
                    case System.DayOfWeek.Sunday:
                        bCheckDayOfWeek = CheckDayOfWeek(schedule.Week.Sun, current);
                        break;
                    case System.DayOfWeek.Monday:
                        bCheckDayOfWeek = CheckDayOfWeek(schedule.Week.Mon, current);
                        break;
                    case System.DayOfWeek.Tuesday:
                        bCheckDayOfWeek = CheckDayOfWeek(schedule.Week.Tue, current);
                        break;
                    case System.DayOfWeek.Wednesday:
                        bCheckDayOfWeek = CheckDayOfWeek(schedule.Week.Wed, current);
                        break;
                    case System.DayOfWeek.Thursday:
                        bCheckDayOfWeek = CheckDayOfWeek(schedule.Week.Thu, current);
                        break;
                    case System.DayOfWeek.Friday:
                        bCheckDayOfWeek = CheckDayOfWeek(schedule.Week.Fri, current);
                        break;
                    case System.DayOfWeek.Saturday:
                        bCheckDayOfWeek = CheckDayOfWeek(schedule.Week.Sat, current);
                        break;
                }
            }


            return bCheckDayOfWeek;
        }

        private bool CheckDayOfWeek(Models.DayOfWeek dayOfWeek, DateTime current)
        {
            if (dayOfWeek.IsDisabled)
            {
                return false;
            }

            if (dayOfWeek.IsAllDay)
            {
                return true;
            }

            var startDate = new DateTime(current.Year, current.Month, current.Day, dayOfWeek.StartHour, dayOfWeek.StartMinute, 0);
            // current가 크면 -1를 리턴 작다면 1을 같다면 0
            if (0 < DateTime.Compare(startDate, current))
            {
                return false;
            }



            var endDate = new DateTime(current.Year, current.Month, current.Day, dayOfWeek.EndHour, dayOfWeek.EndMinute, 0);
            if (0 < DateTime.Compare(current, endDate))
            {
                return false;
            }

            return true;
        }

    }

}
