using System;
using System.Runtime.InteropServices;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Saturn.Viewer
{
    /// <summary>
    /// The View Model for the custom flat window
    /// </summary>
    public class MainWindowViewModel : BaseViewModel
    {
        #region Private Member

        private MainWindow m_View = null;

        public Frame MainFrame { get; set; } = null;

        /// <summary>
        /// The window this view model controls
        /// </summary>
        public MainWindow View
        {
            get
            {
                return m_View;
            }
            set
            {
                m_View = value;

                // Listen out for the window resizing
                View.StateChanged += (sender, e) =>
                {
                    // Fire off events for all properties that are affected by a resize
                    WindowResized();
                };

            }
        }

        /// <summary>
        /// The margin around the window to allow for a drop shadow
        /// </summary>
        private int mOuterMarginSize = 10;

        /// <summary>
        /// The radius of the edges of the window
        /// </summary>
        private int mWindowRadius = 10;

        /// <summary>
        /// The last known dock position
        /// </summary>
        private WindowDockPosition mDockPosition = WindowDockPosition.Undocked;

        #endregion

        #region Public Properties

        /// <summary>
        /// The smallest width the window can go to
        /// </summary>
        public double WindowMinimumWidth { get; set; } = 400;

        /// <summary>
        /// The smallest height the window can go to
        /// </summary>
        public double WindowMinimumHeight { get; set; } = 400;

        /// <summary>
        /// True if the window should be borderless because it is docked or maximized
        /// </summary>
        public bool Borderless { get { return (View.WindowState == WindowState.Maximized || mDockPosition != WindowDockPosition.Undocked); } }

        /// <summary>
        /// The size of the resize border around the window
        /// </summary>
        public int ResizeBorder => Borderless ? 0 : 6;

        /// <summary>
        /// The size of the resize border around the window, taking into account the outer margin
        /// </summary>
        public Thickness ResizeBorderThickness { get { return new Thickness(ResizeBorder + OuterMarginSize); } }

        /// <summary>
        /// The padding of the inner content of the main window
        /// </summary>
        //public Thickness InnerContentPadding { get { return new Thickness(ResizeBorder); } }
        public Thickness InnerContentPadding { get { return new Thickness(0); } }

        /// <summary>
        /// The margin around the window to allow for a drop shadow
        /// </summary>
        public int OuterMarginSize
        {
            get
            {
                // If it is maximized or docked, no border
                return Borderless ? 0 : mOuterMarginSize;
            }
            set
            {
                mOuterMarginSize = value;
            }
        }

        /// <summary>
        /// The margin around the window to allow for a drop shadow
        /// </summary>
        public Thickness OuterMarginSizeThickness { get { return new Thickness(OuterMarginSize); } }

        /// <summary>
        /// The radius of the edges of the window
        /// </summary>
        public int WindowRadius
        {
            get
            {
                // If it is maximized or docked, no border
                return Borderless ? 0 : mWindowRadius;
            }
            set
            {
                mWindowRadius = value;
            }
        }

        /// <summary>
        /// The radius of the edges of the window
        /// </summary>
        public CornerRadius WindowCornerRadius { get { return new CornerRadius(WindowRadius); } }

        /// <summary>
        /// The height of the title bar / caption of the window
        /// </summary>
        public int TitleHeight { get; set; } = 42;
        /// <summary>
        /// The height of the title bar / caption of the window
        /// </summary>
        public GridLength TitleHeightGridLength { get { return new GridLength(TitleHeight + ResizeBorder); } }

        /// <summary>
        /// Current Frame Page
        /// </summary>
        public Models.ApplicationPage CurrentPage { get; set; } = Models.ApplicationPage.Connector;

        #endregion

        #region Commands

        /// <summary>
        /// The command to minimize the window
        /// </summary>
        public ICommand MinimizeCommand { get; set; }

        /// <summary>
        /// The command to maximize the window
        /// </summary>
        public ICommand MaximizeCommand { get; set; }

        /// <summary>
        /// The command to close the window
        /// </summary>
        public ICommand CloseCommand { get; set; }

        /// <summary>
        /// The command to show the system menu of the window
        /// </summary>
        public ICommand MenuCommand { get; set; }

        #endregion

        #region Constructor

        /// <summary>
        /// Default constructor
        /// </summary>
        public MainWindowViewModel()
        {

            // Create commands
            MinimizeCommand = new SaturnCommand(() => View.WindowState = WindowState.Minimized);
            MaximizeCommand = new SaturnCommand(() => View.WindowState ^= WindowState.Maximized);
            CloseCommand = new SaturnCommand(() => View.Close());
            MenuCommand = new SaturnCommand(() => SystemCommands.ShowSystemMenu(View, GetMousePosition()));

            // Fix window resize issue
            //var resizer = new WindowResizer(View);

            //// Listen out for dock changes
            //resizer.WindowDockChanged += (dock) =>
            //{
            //    // Store last position
            //    mDockPosition = dock;

            //    // Fire off resize events
            //    WindowResized();
            //};
        }

        #endregion


        private bool m_AllowsTransparency = true;


        public bool AllowsTransparency
        {
            get
            {
                return View.WindowState == WindowState.Maximized ? false : m_AllowsTransparency;
            }

            set
            {
                m_AllowsTransparency = value;
                OnPropertyChanged(nameof(AllowsTransparency));
            }
        }

        #region Private Helpers

            /// <summary>
            /// Gets the current mouse position on the screen
            /// </summary>
            /// <returns></returns>
        private Point GetMousePosition()
        {
            // Position of the mouse relative to the window
            var position = Mouse.GetPosition(View);

            // Add the window position so its a "ToScreen"
            return new Point(position.X + View.Left, position.Y + View.Top);
        }

        /// <summary>
        /// If the window resizes to a special position (docked or maximized)
        /// this will update all required property change events to set the borders and radius values
        /// </summary>
        private void WindowResized()
        {
            // Fire off events for all properties that are affected by a resize
            OnPropertyChanged(nameof(Borderless));
            OnPropertyChanged(nameof(ResizeBorderThickness));
            OnPropertyChanged(nameof(OuterMarginSize));
            OnPropertyChanged(nameof(OuterMarginSizeThickness));
            OnPropertyChanged(nameof(WindowRadius));
            OnPropertyChanged(nameof(WindowCornerRadius));
            OnPropertyChanged(nameof(AllowsTransparency));
        }


        #endregion

    }
}
