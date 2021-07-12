using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;

namespace Saturn.Viewer.Extensions
{
    public static class BrushExtensions
    {
        public static Brush ToParsedBrush(this string backgroundColor)
        {
            if (!string.IsNullOrEmpty(backgroundColor))
            {
                if (backgroundColor.StartsWith("rgba("))
                {
                    backgroundColor = backgroundColor.Remove(0, 5);
                    backgroundColor = backgroundColor.Remove(backgroundColor.Length - 1, 1);
                    var colors = backgroundColor.Split(',');

                    try
                    {
                        var r = BitConverter.GetBytes(int.Parse(colors[0]))[0];
                        var g = BitConverter.GetBytes(int.Parse(colors[1]))[0];
                        var b = BitConverter.GetBytes(int.Parse(colors[2]))[0];
                        var a = double.Parse(colors[3]);

                        var brush = new SolidColorBrush(Color.FromRgb(r, g, b));
                        brush.Opacity = a;
                        return brush;

                       
                    }
                    catch (System.Exception)
                    {

                    }
                }
                else if (backgroundColor.StartsWith("#"))
                {
                    try
                    {
                        return (Brush)new BrushConverter().ConvertFromString(backgroundColor);
                    }
                    catch (System.Exception)
                    {

                    }
                }
            }

            return null;
        }
    }
}
