using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.VM.Onboarding;

namespace WebApplication.Controllers
{
    [Authorize]
    public class OnboardingController : Controller
    {
        public IActionResult Index()
        {
            return View(new OnboardingVM());
        }
    }
}