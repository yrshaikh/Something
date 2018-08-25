using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Database.Entities.Models;
using Database.EntityFramework;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApplication.Views.Company;

namespace WebApplication.ApiControllers
{
    [Produces("application/json")]
    [Route("api/Companies")]
    [Authorize]
    public class CompaniesController : BaseApiController
    {
        public CompaniesController(UserManager<ApplicationUser> userManager, ApplicationDbContext dbContext) : base(userManager, dbContext)
        {
        }

        // GET: api/Companies
        [HttpGet]
        public IEnumerable<CompanyViewModel> Get()
        {
            var companiesVm = new List<CompanyViewModel>();
            var companies = _dbContext.Companies.ToList();
            foreach(var company in companies)
            {
                companiesVm.Add(new CompanyViewModel(company.CompanyId, company.Name));
            }
            return companiesVm;
        }

        // GET: api/Companies/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Companies
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]string value)
        {
            if (string.IsNullOrEmpty(value) || value.Length < 3)
            {
                return BadRequest(value);
            }

            var company = new Company
            {
                Name = value,
                CreatedOn = DateTime.Now,
                CreatedBy = GetUserId()
            };

            _dbContext.Companies.Add(company);
            await _dbContext.SaveChangesAsync();

            return Created(string.Empty, company.CompanyId);
        }
        
        // PUT: api/Companies/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
