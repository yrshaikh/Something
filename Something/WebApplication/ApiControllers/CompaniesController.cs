using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Common.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Service.Services.Company;
using Service.ViewModels.Company;

namespace WebApplication.ApiControllers
{
    [Produces("application/json")]
    [Route("api/Companies")]
    [Authorize]
    public class CompaniesController : BaseApiController
    {
        private readonly ICompanyService _companyService;
        public CompaniesController(UserManager<ApplicationUser> userManager, ICompanyService companyService ) : base(userManager)
        {
            _companyService = companyService;
        }

        // GET: api/Companies
        [HttpGet]
        public IEnumerable<CompanyViewModel> Get()
        {
            var companies = _companyService.GetCompanies(GetUserId());
            return companies;
        }
        
        // POST: api/Companies
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]string value)
        {
            if (string.IsNullOrWhiteSpace(value) || value.Length < 3)
            {
                return BadRequest(value);
            }

            var companyId = _companyService.CreateCompany(value, GetUserId());
            return Created(string.Format("/api/companies/get/{0}", companyId), companyId);
        }

        [HttpGet]
        public CompanyViewModel Get(int id)
        {
            throw new NotImplementedException();
        }
    }
}
