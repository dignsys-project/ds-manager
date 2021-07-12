using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Saturn.Viewer.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Services
{
    public class DocumentService
    {
        private Document m_Document = null;

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public Document Document => m_Document;

        private static DocumentService m_Instance = null;
        public static DocumentService Instance
        {
            get 
            { 
                if(null == m_Instance)
                {
                    m_Instance = new DocumentService();
                }

                return m_Instance;
            }
        }

        public DocumentService()
        {
        }

        public static string ResourceFolder => System.IO.Path.Combine(m_Instance.GetDocumentsFolder(), "Resources");
        public static string CaptureFolder => System.IO.Path.Combine(m_Instance.GetDocumentsFolder(), "Captures");

        

        public void Load()
        {
            if (!System.IO.Directory.Exists(GetDocumentsFolder()))
            {
                m_Logger.Info($"Created Document Directory : {GetDocumentsFolder()}");

                System.IO.Directory.CreateDirectory(GetDocumentsFolder());
            }

            bool bCreateDocument = true;
            if (System.IO.File.Exists(GetFullPath()))
            {
                try
                {
                    var content = File.ReadAllText(GetFullPath());
                    m_Document = JsonConvert.DeserializeObject<Document>(content);

                    bCreateDocument = false;
                }
                catch (System.Exception /*ex*/)
                {
                }
            }

            if (bCreateDocument)
            {
                m_Document = new Document();

                Save();
            }
        }

        /// <summary>
        /// document create or save 
        /// </summary>
        public void Save()
        {
            try
            {
                var contents = JsonConvert.SerializeObject(m_Document);
                File.WriteAllText(GetFullPath(), contents);
            }
            catch (System.Exception ex)
            {
            	m_Logger.Error($"DocumentService, Save, Exception : {ex}");
            }
            
        }

        public async Task SaveAsync()
        {
            await Task.Run(() => Save());
        }

        public string GetDocumentsFolder()
        {
            return System.IO.Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "GameGress", "SaturnViewer");
        }

        private string GetFullPath()
        {
            return System.IO.Path.Combine(GetDocumentsFolder(), "Document.json");
        }
    }
}
