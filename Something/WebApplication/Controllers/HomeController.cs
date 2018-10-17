using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Service.VM;

namespace WebApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
            
            if (!User.Identity.IsAuthenticated)
                return View();
            return RedirectToAction("Index", "Dashboard");
        }

        public IActionResult Error()
        {
            return View(new ErrorVM { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
