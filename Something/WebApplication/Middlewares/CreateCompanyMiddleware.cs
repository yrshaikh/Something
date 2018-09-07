using Microsoft.AspNetCore.Http;
using Service.Services.Company;
using System.Threading.Tasks;
using Common.Models;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Security.Claims;
using System;

namespace WebApplication.Middlewares
{
    public class CreateCompanyMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly string _redirectPath = "/onboarding";

        public CreateCompanyMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, UserManager<ApplicationUser> userManager, ICompanyService companyService)
        {
            if (context.User.Identity.IsAuthenticated)
            {
                var userId = context.User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier).Value;
                if (!context.Request.Path.Value.ToString().Contains(_redirectPath) && !companyService.HasAnyCompany(Guid.Parse(userId)))
                {
                    context.Response.Redirect(_redirectPath);
                }
            }
            await _next.Invoke(context);
        }
    }
}
