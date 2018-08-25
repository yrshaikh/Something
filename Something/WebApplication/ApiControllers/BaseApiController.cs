using Database.EntityFramework;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebApplication.ApiControllers
{
    public class BaseApiController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        protected readonly ApplicationDbContext _dbContext;

        public BaseApiController(UserManager<ApplicationUser> userManager, ApplicationDbContext dbContext)
        {
            _userManager = userManager;
            _dbContext = dbContext;
        }

        protected Guid GetUserId()
        {
            var id = _userManager.GetUserId(User);
            return new Guid(id);
        }
    }
}