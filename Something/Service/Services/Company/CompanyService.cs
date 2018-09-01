using System;
using System.Collections.Generic;
using System.Linq;
using Database.EntityFramework;
using Service.ViewModels.Company;
using System.Threading.Tasks;

namespace Service.Services.Company
{
    public class CompanyService : ICompanyService
    {
        private readonly ApplicationDbContext _dbContext;

        public CompanyService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<CompanyViewModel> GetCompanies()
        {
            var companiesVm = new List<CompanyViewModel>();
            var companies = _dbContext.Companies.ToList();
            foreach (var company in companies)
            {
                companiesVm.Add(new CompanyViewModel(company.CompanyId, company.Name));
            }
            return companiesVm;
        }

        public async Task<int> CreateCompanyAsync(string value, Guid createdBy)
        {
            var company = new Database.Entities.Company { Name = value, CreatedBy = createdBy, CreatedOn = DateTime.Now };
            _dbContext.Companies.Add(company);
            var companyId = await _dbContext.SaveChangesAsync().ConfigureAwait(false);
            return companyId;
        }
    }
}
