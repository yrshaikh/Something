using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class OnboardingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}