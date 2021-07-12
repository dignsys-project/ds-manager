using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using Saturn.Viewer.Extensions;
using Saturn.Viewer.Services;

namespace Saturn.Viewer.Components
{
    public class SceneButton : AbstractButton
    {
        public static volatile bool m_bProcess = false;
        private readonly long m_SceneId = 0;

        private readonly SceneService m_SceneService = null;

        public SceneButton(
            SceneService sceneService, Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartButton scenePartButton, string documentFolder)
            : base(common, scenePartButton.Resource, scenePartButton.Text, documentFolder)
        {
            m_SceneService = sceneService;

            m_SceneId = scenePartButton.SceneId;

            var blueprint = m_SceneService.FindBlueprint(m_SceneId);
            if (null == blueprint)
            {
                this.IsEnabled = false;
            }

        }


        protected override void OnClickButton()
        {
            var sceneId = m_SceneId;
            if (0 >= sceneId)
            {
                return;
            }

            var blueprint = m_SceneService.FindBlueprint(sceneId);
            if (null == blueprint)
            {
                return;
            }

            m_SceneService.NextSceneId = sceneId;

            PageService.Instance.MovePage(Models.ApplicationPage.Scene);
        }
    }
}
