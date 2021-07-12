using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Threading;

namespace Saturn.Viewer.Services
{
    public class ScheduleService
    {
        private readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private List<Models.ConnectorScheduleScene> m_Schedules = new List<Models.ConnectorScheduleScene>();

        private readonly ReaderWriterLockSlim m_RWLock = null;

        public long CurrentConnectorScheduleSceneId { get; set; }

        public ScheduleService()
        {
            m_RWLock = new ReaderWriterLockSlim();
        }

        public void SetSchedules(List<Models.ConnectorScheduleScene> schedules)
        {
            // 최근에 추가된 스케줄로 정렬해준다.
            schedules.OrderBy(x => x.UpdatedSeconds);

            m_RWLock.EnterWriteLock();

            m_Schedules = schedules;

            m_RWLock.ExitWriteLock();
        }

        public List<Models.ConnectorScheduleScene> GetSchedules()
        {
            List<Models.ConnectorScheduleScene> container = new List<Models.ConnectorScheduleScene>();
            m_RWLock.EnterReadLock();

            container.AddRange(m_Schedules);

            m_RWLock.ExitReadLock();

            return container;
        }

        public Models.ConnectorScheduleScene FindConnectorScheduleScene(long connectorScheduleSceneId)
        {
            Models.ConnectorScheduleScene connectorScheduleScene = null;

            m_RWLock.EnterReadLock();

            connectorScheduleScene = m_Schedules.Find(x => x.ConnectorScheduleSceneId == connectorScheduleSceneId);

            m_RWLock.ExitReadLock();

            return connectorScheduleScene;
        }
    }
}
