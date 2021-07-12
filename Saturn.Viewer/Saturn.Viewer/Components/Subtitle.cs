using Saturn.Viewer.Extensions;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Threading;
using System.Windows.Media.Animation;
using System.IO;
using System.Diagnostics;
using System.ServiceModel.Syndication;

namespace Saturn.Viewer.Components
{
    public class Subtitle : System.Windows.Controls.Canvas
    {
        // content
        private string m_Content = string.Empty;

        private List<string> m_Contents = new List<string>();

        // animation seconds 
        private readonly int m_Seconds = 0;

        // animation kind
        private readonly Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND m_AnimationKind = Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND.Default;

        // text block 
        private readonly System.Windows.Controls.Label m_TextBox = null;

        private readonly Backends.Protocols.Common.ScenePartSubtitle m_ScenePart = null;

        private readonly string m_DocumentFolder = null;

        private int m_CurrentIndex = -1;

        private DispatcherTimer m_Timer = null;
        private Storyboard m_Storyboard = null;

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);


        private long m_BaseWidth = 0;
        private long m_Width = 0;

        private string m_Address;

        public Subtitle(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartSubtitle scenePart, string documentFolder)
        {
            var commonSize = common.Size;

            m_Width = commonSize.Width;

            m_DocumentFolder = documentFolder;

            m_AnimationKind = scenePart.AnimationKind;
            m_Seconds = scenePart.Seconds;
            m_ScenePart = scenePart;

            // set background.
            var background = common.Background;

            if (!string.IsNullOrEmpty(background))
            {
                Background = background.ToParsedBrush();
            }

            m_TextBox = new System.Windows.Controls.Label();
            m_TextBox.Visibility = Visibility.Hidden;

            ClipToBounds = true;


            // set size 
            var size = common.Size;
            m_TextBox.Width = size.Width;
            m_TextBox.Height = size.Height;

            m_BaseWidth = size.Width;

            SetTop(m_TextBox, 0);
            SetLeft(m_TextBox, 0);

            // change text size and foreground
            var text = scenePart.Text;
            if (null != text)
            {
                m_TextBox.FontSize = text.TextSize;
                m_TextBox.Foreground = text.TextColor.ToParsedBrush();
                if (text.Bold)
                {
                    m_TextBox.FontWeight = FontWeights.Bold;
                }

                if (text.Italic)
                {
                    m_TextBox.FontStyle = FontStyles.Italic;
                }
            }


            switch (text.VerticalKind)
            {
                case Backends.Protocols.Common.TEXT_ALIGN_KIND.VerticalStart:
                    m_TextBox.VerticalContentAlignment = System.Windows.VerticalAlignment.Top;
                    break;

                case Backends.Protocols.Common.TEXT_ALIGN_KIND.VerticalCenter:
                    m_TextBox.VerticalContentAlignment = System.Windows.VerticalAlignment.Center;
                    break;

                case Backends.Protocols.Common.TEXT_ALIGN_KIND.VerticalEnd:
                    m_TextBox.VerticalContentAlignment = System.Windows.VerticalAlignment.Bottom;
                    break;
            }

            switch (text.HorizontalKind)
            {
                case Backends.Protocols.Common.TEXT_ALIGN_KIND.HorizontalStart:
                    m_TextBox.HorizontalContentAlignment = System.Windows.HorizontalAlignment.Left;
                    break;

                case Backends.Protocols.Common.TEXT_ALIGN_KIND.HorizontalCenter:
                    m_TextBox.HorizontalContentAlignment = System.Windows.HorizontalAlignment.Center;
                    break;

                case Backends.Protocols.Common.TEXT_ALIGN_KIND.HorizontalEnd:
                    m_TextBox.HorizontalContentAlignment = System.Windows.HorizontalAlignment.Right;
                    break;
            }



            Children.Add(m_TextBox);

            Unloaded += OnUnloadedSubtitle;
        }

        public async Task<bool> LoadContentAsync()
        {
            var scenePart = m_ScenePart;

            var resource = scenePart.Resource;
            if (resource != null)
            {

                var location = resource.Location;
                try
                {
                    var document = Services.DocumentService.Instance.Document;
                    var resources = new List<Models.Resource>(document.Resources);
                    var existsResource = resources.Find(x => x.ResourceId == resource.ResourceId);
                    if (null != existsResource)
                    {
                        location = existsResource.Location;
                    }

                }
                catch (Exception ex)
                {
                    m_Logger.Error($"Subtitle, LoadContentAsync, exists Resource is Used. exception : {ex}");
                }

                var fileName = Path.Combine(m_DocumentFolder, location);
                if (!File.Exists(fileName))
                {
                    m_Logger.Error($"Subtitle, LoadContentAsync, Resource File is not exists. Path : {fileName}");

                    return false;
                }
                try
                {
                    using (var sr = new StreamReader(fileName))
                    {
                        m_Content = await sr.ReadToEndAsync();
                    }
                }
                catch (System.Exception ex)
                {
                    m_Logger.Error($"Subtitle, LoadContentAsync, Resource File read failed. Path : {fileName}, Exception : {ex}");

                    return false;
                }

                ParseContent(m_Content);
            }
            else if (scenePart.Rss != null)
            {
                var rssElement = scenePart.Rss;
                m_Address = rssElement.Address;

                if (System.Uri.IsWellFormedUriString(m_Address, UriKind.RelativeOrAbsolute))
                {
                    var contents = await GetFeeds();

                    File.WriteAllLines("origin.txt", contents);
                    ParseContents(contents);
                    File.WriteAllLines("parsed.txt", m_Contents);


                }
                else
                {
                    m_Content = "RSS 영역";
                }
            }
            else
            {
                m_Content = scenePart.Text.Text;

                ParseContent(m_Content);
            }




            if (m_Contents.Count >= 1)
            {
                CreateAnimations(m_AnimationKind);
            }

            m_TextBox.Visibility = Visibility.Visible;

            return true;
        }

        private void OnUnloadedSubtitle(object sender, RoutedEventArgs e)
        {
            if (null != m_Timer)
            {
                m_Timer.Stop();
            }

        }

        private void ParseContents(List<string> defaults)
        {
            List<string> contents = new List<string>();

            foreach (var tempContent in defaults)
            {
                var trimmedContent = tempContent.TrimStart();
                if (!string.IsNullOrWhiteSpace(trimmedContent))
                {
                    contents.Add(Regex.Replace(trimmedContent, @"\r\n?|\n", ""));
                }
            }

            if (m_AnimationKind != Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND.RightToLeft)
            {
                foreach (var content in contents)
                {
                    var formattedText = new FormattedText(content, CultureInfo.CurrentCulture, FlowDirection.LeftToRight,
                        new Typeface(m_TextBox.FontFamily, m_TextBox.FontStyle, m_TextBox.FontWeight, m_TextBox.FontStretch),
                        this.m_TextBox.FontSize, m_TextBox.Foreground, new NumberSubstitution(), 1);

                    if (m_TextBox.Width < formattedText.Width - 1)
                    {
                        var textBoxWidth = m_TextBox.Width;
                        var textWidth = formattedText.Width - 1;

                        var avarageTextWidth = (int)Math.Round((float)textWidth / (float)(content.Length));
                        var meansureTextLength = (int)Math.Round(textBoxWidth / avarageTextWidth);

                        var trimmedContent = content.TrimStart();
                        if (trimmedContent.Length <= 0)
                        {
                            continue;
                        }

                        var length = trimmedContent.Length;
                        var index = 0;
                        do
                        {
                            var size = meansureTextLength;
                            if (size > content.Length - index)
                            {
                                size = content.Length - index;
                            }
                            m_Contents.Add(content.Substring(index, size));
                            index += size;

                        } while (index < length);
                    }
                    else
                    {
                        m_Contents.Add(content);
                    }
                }

            }
            else
            {
                m_Contents.AddRange(contents);
            }

            m_CurrentIndex = -1;

            NextContent();
        }

        private void ParseContent(string text)
        {
            var tempContents = text.Split('.').ToList();
            ParseContents(tempContents);
        }

        private void CreateAnimations(Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND kind)
        {
            // animation is noting
            switch (kind)
            {
                case Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND.Default:
                    CreateDispatchTimer();
                    break;
                case Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND.RightToLeft:
                case Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND.LeftToRight:
                    CreateSlideAnimation();
                    break;

                case Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND.Wrap:
                    CreateWrapAnimation();
                    break;
            }

        }

        private void CreateDispatchTimer()
        {
            m_Timer = new DispatcherTimer();
            m_Timer.Interval = TimeSpan.FromSeconds(this.m_Seconds);
            m_Timer.Tick += (object sender, EventArgs e) => NextContent();
            m_Timer.Start();
        }

        private void CreateWrapAnimation()
        {
            var animSeconds = m_Seconds - 1;

            m_Storyboard = new Storyboard();

            var height = m_TextBox.Height;

            var fadeInAnimation = new DoubleAnimation();
            fadeInAnimation.From = height;
            fadeInAnimation.To = 0;
            fadeInAnimation.Duration = TimeSpan.FromSeconds(animSeconds / 2);

            var fadeOutAnimation = new DoubleAnimation();
            fadeOutAnimation.From = 0;
            fadeOutAnimation.To = -height;
            fadeOutAnimation.BeginTime = TimeSpan.FromSeconds(animSeconds / 2 + 1);
            fadeOutAnimation.Duration = TimeSpan.FromSeconds(animSeconds / 2);

            Storyboard.SetTargetProperty(fadeInAnimation, new PropertyPath(Canvas.TopProperty));
            Storyboard.SetTargetProperty(fadeOutAnimation, new PropertyPath(Canvas.TopProperty));
            Storyboard.SetTarget(fadeInAnimation, m_TextBox);
            Storyboard.SetTarget(fadeOutAnimation, m_TextBox);

            m_Storyboard.Children.Add(fadeInAnimation);
            m_Storyboard.Children.Add(fadeOutAnimation);

            m_Storyboard.Completed += OnCompletedStoryboard;

            m_Storyboard.Begin(m_TextBox);
        }

        private void OnCompletedStoryboard(object sender, EventArgs e)
        {
            NextContent();

            // start animation 
            m_Storyboard.Begin(m_TextBox);
        }

        private void OnCompletedSlideStoryboard(object sender, EventArgs e)
        {
            NextContent();

            if (m_Storyboard.Children.Count > 0)
            {
                var animation = m_Storyboard.Children[0];
                var doubleAnimation = animation as DoubleAnimation;

                var width = m_TextBox.Width;
                doubleAnimation.From = m_Width;
                doubleAnimation.To = -width;
            }
            m_Storyboard.Begin();

        }

        private void CreateSlideAnimation()
        {
            var animSeconds = m_Seconds;

            m_Storyboard = new Storyboard();


            var width = m_TextBox.Width;

            var fadeInAnimation = new DoubleAnimation();
            fadeInAnimation.From = m_Width;
            fadeInAnimation.To = -width;
            fadeInAnimation.Duration = TimeSpan.FromSeconds(animSeconds);

            Storyboard.SetTargetProperty(fadeInAnimation, new PropertyPath(Canvas.LeftProperty));
            Storyboard.SetTarget(fadeInAnimation, m_TextBox);

            m_Storyboard.Children.Add(fadeInAnimation);

            m_Storyboard.Completed += OnCompletedSlideStoryboard;

            m_Storyboard.Begin(m_TextBox);
        }

        private void NextContent()
        {
            if (m_Contents.Count <= 0)
            {
                return;
            }

            var nextIndex = m_CurrentIndex + 1;
            if (nextIndex >= m_Contents.Count)
            {
                nextIndex = 0;
            }

            m_CurrentIndex = nextIndex;

            var content = m_Contents[nextIndex];
            if (m_AnimationKind == Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND.LeftToRight || m_AnimationKind == Backends.Protocols.Common.ScenePartSubtitle.Types.SUBTITLE_ANIMATION_KIND.RightToLeft)
            {
                var formattedText = new FormattedText(content, CultureInfo.CurrentCulture, FlowDirection.LeftToRight,
                        new Typeface(m_TextBox.FontFamily, m_TextBox.FontStyle, m_TextBox.FontWeight, m_TextBox.FontStretch),
                        this.m_TextBox.FontSize, m_TextBox.Foreground, new NumberSubstitution(), 1);

                var letterWitdth = formattedText.Width / content.Length;

                var needWidth = formattedText.Width + Math.Round(letterWitdth);
                if (m_BaseWidth > needWidth)
                {
                    needWidth = m_BaseWidth;
                }
                m_TextBox.Width = needWidth;
            }

            m_TextBox.Content = content;
        }

        private async Task<List<string>> GetFeeds()
        {
            SyndicationFeed feed = null;

            using (System.Xml.XmlReader xr = System.Xml.XmlReader.Create(m_Address))
            {
                try
                {
                    feed = await Task.Run(() => SyndicationFeed.Load(xr));
                }
                catch (System.Exception ex)
                {
                    m_Logger.Error($"Subtitle, LoadFeed failed, Exception : {ex}");

                    return default(List<string>);
                }
            }

            if (null == feed)
            {
                return default(List<string>);
            }

            List<string> contents = new List<string>();

            var rssElement = m_ScenePart.Rss;

            foreach (var item in feed.Items)
            {
                if (rssElement.ContentKinds.Contains(Backends.Protocols.Common.ScenePartSubtitle.Types.RSS_CONTENT_KIND.Title))
                {
                    if (null != item.Title && null != item.Summary.Text)
                    {
                        contents.Add(item.Title.Text);
                    }
                }

                if (rssElement.ContentKinds.Contains(Backends.Protocols.Common.ScenePartSubtitle.Types.RSS_CONTENT_KIND.Description))
                {
                    if (null != item.Summary && null != item.Summary.Text)
                    {
                        contents.Add(item.Summary.Text);
                    }
                }

            }


            return contents;

        }

    }



}
