using MapControl;
using Saturn.Viewer;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;

namespace Saturn.Viewer.Components
{



    public class CoordinateOsmMap : MapControl.Map
    {
        private readonly CoordinateViewModel m_ViewModel = null;
        public CoordinateOsmMap()
        {
            ImageLoader.HttpClient.DefaultRequestHeaders.Add("User-Agent", "XAML Map Control Test Application");
            TileImageLoader.Cache = new MapControl.Caching.ImageFileCache(TileImageLoader.DefaultCacheFolder);

            m_ViewModel = new CoordinateViewModel();
            Center = m_ViewModel.MapCenter;
            ManipulationInertiaStarting += MapManipulationInertiaStarting;
            MapLayer = m_ViewModel.CurrentLayer;
            MaxZoomLevel = 20;
            MinZoomLevel = 16;
            ZoomLevel = 16;
            MouseLeave += MapMouseLeave;
            MouseLeftButtonDown += MapMouseLeftButtonDown;
            MouseMove += MapMouseMove;
            MouseRightButtonDown += MapMouseRightButtonDown;

        }

        //////////////////////////////////////////////////////////////////////////
        // for MapControl.WPF
        private void MapMouseLeftButtonDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ClickCount == 2)
            {
                //map.ZoomMap(e.GetPosition(map), Math.Floor(map.ZoomLevel + 1.5));
                //map.ZoomToBounds(new BoundingBox(53, 7, 54, 9));
                //map.TargetCenter = map.ViewToLocation(e.GetPosition(map));
            }
        }

        private void MapMouseRightButtonDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ClickCount == 2)
            {
                //map.ZoomMap(e.GetPosition(map), Math.Ceiling(map.ZoomLevel - 1.5));
            }
        }

        private void MapMouseMove(object sender, MouseEventArgs e)
        {
            var map = sender as MapControl.Map;
            if (null != map)
            {
                var location = map.ViewToLocation(e.GetPosition(map));
                var latitude = (int)Math.Round(location.Latitude * 60000d);
                var longitude = (int)Math.Round(Location.NormalizeLongitude(location.Longitude) * 60000d);
            }

        }

        private void MapMouseLeave(object sender, MouseEventArgs e)
        {
            //mouseLocation.Text = string.Empty;
        }

        private void MapManipulationInertiaStarting(object sender, ManipulationInertiaStartingEventArgs e)
        {
            e.TranslationBehavior.DesiredDeceleration = 0.001;
        }

        private void MapItemTouchDown(object sender, TouchEventArgs e)
        {
            var mapItem = (MapItem)sender;
            mapItem.IsSelected = !mapItem.IsSelected;
            e.Handled = true;
        }

        private void SeamarksChecked(object sender, RoutedEventArgs e)
        {
            //map.Children.Insert(map.Children.IndexOf(mapGraticule), ((MapViewModel)DataContext).MapLayers.SeamarksLayer);
        }

        private void SeamarksUnchecked(object sender, RoutedEventArgs e)
        {
            //map.Children.Remove(((MapViewModel)DataContext).MapLayers.SeamarksLayer);
        }
    }

    public class CoordinateViewModel : BaseViewModel
    {
        public MapTileLayer m_CurrentLayer = new MapTileLayer
        {
            SourceName = "OpenStreetMap",
            Description = "© [OpenStreetMap Contributors](http://www.openstreetmap.org/copyright)",
            TileSource = new TileSource { UriFormat = "https://{c}.tile.openstreetmap.org/{z}/{x}/{y}.png" },
            MaxZoomLevel = 19
        };

        public UIElement CurrentLayer
        {
            get
            {
                return m_CurrentLayer;
            }
        }

        private Location mapCenter = new Location(36.4945, 127.2748);
        public Location MapCenter
        {
            get { return mapCenter; }
            set
            {
                mapCenter = value;
            }
        }

        public ObservableCollection<PointItem> Points { get; } = new ObservableCollection<PointItem>();
        public ObservableCollection<PointItem> Pushpins { get; } = new ObservableCollection<PointItem>();
        public ObservableCollection<Polyline> Polylines { get; } = new ObservableCollection<Polyline>();

        public CoordinateViewModel()
        {

        }

        


    }
}
