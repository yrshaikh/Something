using System;
using System.Collections.Generic;
using System.Linq;
using Database.EntityFramework;
using Service.ViewModels.Company;
using System.Threading.Tasks;
using Database.Entities;

namespace Service.Services.Company
{
    public class CompanyService : ICompanyService
    {
        private readonly ApplicationDbContext _dbContext;

        public CompanyService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<CompanyViewModel> GetCompanies(Guid userId)
        {
            var companies = _dbContext
                                    .CompanyUsers
                                    .Where(x => x.UserId == userId)
                                    .Select(x => x.Company).ToList();

            var companiesVm = new List<CompanyViewModel>();
            foreach (var company in companies)
            {
                companiesVm.Add(new CompanyViewModel(company.CompanyId, company.Name));
            }
            return companiesVm;
        }

        public int CreateCompany(string value, Guid createdBy)
        {
            var company = new Database.Entities.Company { Name = value, CreatedBy = createdBy, CreatedOn = DateTime.Now };
            var companyUser = new CompanyUsers() { Company = company, UserId = createdBy };

            _dbContext.CompanyUsers.Add(companyUser);
            _dbContext.SaveChanges();
            
            return companyUser.CompanyId;
        }

        public bool HasAnyCompany(Guid userId)
        {
            return _dbContext.CompanyUsers
                    .Where(x => x.UserId == userId)
                    .Select(x => x.Company).Any();
        }
    }
}
