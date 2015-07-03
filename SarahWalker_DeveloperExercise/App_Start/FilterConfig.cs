using System.Web;
using System.Web.Mvc;

namespace SarahWalker_DeveloperExercise
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}