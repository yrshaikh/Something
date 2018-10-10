using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.ViewModels.Onboarding;

namespace WebApplication.Controllers
{
    [Authorize]
    public class OnboardingController : Controller
    {
        public IActionResult Index()
        {
            return View(new OnboardingViewModel());
        }
    }
}