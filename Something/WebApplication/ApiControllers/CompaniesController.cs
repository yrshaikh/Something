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
        public IEnumerable<CompanyVM> Get()
        {
            var companies = _companyService.GetCompanies(GetUserId());
            return companies;
        }
        
        // POST: api/Companies
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CreateCompanyVM model)
        {
            if (string.IsNullOrWhiteSpace(model.Name) || model.Name.Length < 3)
            {
                return BadRequest(model.Name);
            }

            var companyId = _companyService.CreateCompany(model.Name, GetUserId());
            return CreatedAtAction("Get", new { id = companyId }, companyId);
        }

        [HttpGet("{id}")]
        public CompanyVM Get(int id)
        {
            throw new NotImplementedException();
        }
    }
}
