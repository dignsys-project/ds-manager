﻿using DeviceId;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Saturn.Viewer.Pages
{
    /// <summary>
    /// Interaction logic for DevicePage.xaml
    /// </summary>
    public partial class DevicePage : Page
    {
        private readonly ViewModel.DevicePageViewModel m_ViewModel = null;
        public DevicePage(ViewModel.DevicePageViewModel viewModel)
        {
            InitializeComponent();

            m_ViewModel = viewModel;
        }

        private async void Page_Loaded(object sender, RoutedEventArgs e)
        {
            DataContext = m_ViewModel;

            await m_ViewModel.Onload();
        }
    }
}
