using System.Linq;

namespace Saturn.Backends.Services.Extensions
{
    public static class SyndicationFeedExtensions
    {
        public static Saturn.Backends.Protocols.Common.Feed ToMessage(this System.ServiceModel.Syndication.SyndicationFeed feed)
        {
            if (feed is null)
            {
                return default(Saturn.Backends.Protocols.Common.Feed);
            }
            var message = new Saturn.Backends.Protocols.Common.Feed();
            // set title 
            if (null != feed.Title)
            {
                message.Title = feed.Title.Text;
            }

            // set link 
            if (null != feed.Links)
            {
                if (0 < feed.Links.Count)
                {
                    var link = feed.Links.FirstOrDefault();
                    if (null != link.Uri)
                    {
                        message.Link = link.Uri.ToString();
                    }
                }
            }

            // set description 
            if (null != feed.Description)
            {
                message.Description = feed.Description.Text;
            }

            // set language
            if (null != feed.Language)
            {
                message.Language = feed.Language;
            }

            // set copyright
            if (null != feed.Copyright)
            {
                message.Copyright = feed.Copyright.Text;
            }

            // set last build date
            if (null != feed.LastUpdatedTime)
            {
                message.LastBuildDateSeconds = feed.LastUpdatedTime.ToUnixTimeSeconds();
            }

            if (null != feed.Items && feed.Items.Count() > 0)
            {
                message.Items.AddRange(feed.Items.Select(x =>
                {

                    var item = new Saturn.Backends.Protocols.Common.Feed.Types.FeedItem();

                    if (null != x.Title)
                    {
                        item.Title = x.Title.Text;
                    }

                    if (null != x.Links && x.Links.Count > 0)
                    {
                        var link = x.Links.FirstOrDefault();
                        if (null != link && null != link.Uri)
                        {
                            item.Link = link.Uri.ToString();
                        }
                    }

                    try
                    {
                        if (x.PublishDate.GetType() == typeof(System.DateTime))
                        {
                            item.PubDateSeconds = x.PublishDate.ToUnixTimeSeconds();
                        }

                    }
                    catch (System.Exception)
                    {
                        item.PubDateSeconds = 0;
                    }

                    try
                    {
                        if (x.LastUpdatedTime.GetType() == typeof(System.DateTime))
                        {
                            item.LastUpdateSeconds = x.LastUpdatedTime.ToUnixTimeSeconds();
                        }
                    }
                    catch (System.Exception)
                    {
                        item.LastUpdateSeconds = 0;
                    }


                    if (x.Summary != null)
                    {
                        item.Description = x.Summary.Text;
                    }

                    return item;

                }));
            }

            return message;
        }
    }
}