using Common.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebApplication.ApiControllers
{
    public class BaseApiController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public BaseApiController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        protected Guid GetUserId()
        {
            var id = _userManager.GetUserId(User);
            return new Guid(id);
        }
    }
}