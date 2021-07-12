using Saturn.Viewer.Extensions;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Windows.Threading;

namespace Saturn.Viewer.Components
{
    public class ClockBox : StackPanel
    {
        private readonly TextBlock m_DateTextBox = null;
        private readonly TextBlock m_TimeTextBox = null;

        private readonly DispatcherTimer m_DispatcherTimer = null;

        private readonly bool m_bUseDate = false;
        private readonly string m_DateFormat = "yyyy-MM-dd";
        private readonly string m_TimeFormat = "hh : mm : ss";
        private readonly bool m_bUseWeek = false;

        public ClockBox(Saturn.Backends.Protocols.Common.ScenePartCommon common, Saturn.Backends.Protocols.Common.ScenePartClock part, string documentFolder)
        {
            Orientation = Orientation.Vertical;

            // set background 
            if (part.Resource != null)
            {
                var document = Services.DocumentService.Instance.Document;

                List<Models.Resource> resources;
                try
                {
                    resources = new List<Models.Resource>(document.Resources);
                }
                catch (Exception ex)
                {
                    resources = null;
                }

                var imageBrush = part.Resource.ToImageBrush(documentFolder, resources);
                if (null != imageBrush)
                {
                    Background = imageBrush;
                }
            }
            else if (!string.IsNullOrEmpty(common.Background))
            {
                var brush = common.Background.ToParsedBrush();
                if (null != brush)
                {
                    Background = brush;
                }
            }

            var current = DateTime.Now;

            // create date text block
            m_bUseDate = part.UseDate;
            if (m_bUseDate)
            {
                // set use week 
                m_bUseWeek = part.UseWeek;

                if (!string.IsNullOrEmpty(part.DateFormat))
                {
                    m_DateFormat = part.DateFormat;
                }

                m_DateTextBox = part.DateText.ToTextBlock();
                m_DateTextBox.HorizontalAlignment = System.Windows.HorizontalAlignment.Center;


                
                var dateText = current.ToString(m_DateFormat);

                if (m_bUseWeek)
                {
                    dateText = $"{dateText} {GetCurrentWeek(current)}";
                }
                m_DateTextBox.Text = dateText;

                Children.Add(m_DateTextBox);
            }

            if (!string.IsNullOrEmpty(part.TextFormat))
            {
                m_TimeFormat = part.TextFormat;
            }

            // create time text block
            m_TimeTextBox = part.Text.ToTextBlock();
            Children.Add(m_TimeTextBox);

            // set current time 
            m_TimeTextBox.Text = current.ToString(m_TimeFormat);
            m_TimeTextBox.HorizontalAlignment = System.Windows.HorizontalAlignment.Center;

            // create dispatcher
            m_DispatcherTimer = new DispatcherTimer();
            m_DispatcherTimer.Tick += new EventHandler(dispatcherTimer_Tick);
            m_DispatcherTimer.Interval = new TimeSpan(0, 0, 1);
            m_DispatcherTimer.Start();

            Unloaded += ClockBox_Unloaded;
        }

        private void ClockBox_Unloaded(object sender, System.Windows.RoutedEventArgs e)
        {
            m_DispatcherTimer.Stop();
        }

        private void dispatcherTimer_Tick(object sender, EventArgs e)
        {
            // Updating the Label which displays the current second
            var current = DateTime.Now;
            m_TimeTextBox.Text = current.ToString(m_TimeFormat);

            // updating the label with displays the current date 
            if (m_bUseDate)
            {
                var dateText = current.ToString(m_DateFormat);

                if (m_bUseWeek)
                {
                    dateText = $"{dateText} {GetCurrentWeek(current)}";
                }

                m_DateTextBox.Text = dateText;
            }
        }

        private string GetCurrentWeek(DateTime current)
        {
            switch(current.DayOfWeek)
            {
                case DayOfWeek.Monday:
                    return "월";
                case DayOfWeek.Tuesday:
                    return "화";
                case DayOfWeek.Wednesday:
                    return "수";
                case DayOfWeek.Thursday:
                    return "목";
                case DayOfWeek.Friday:
                    return "금";
                case DayOfWeek.Saturday:
                    return "토";
                case DayOfWeek.Sunday:
                    return "일";
            }
            return "";
        }

    }
}
