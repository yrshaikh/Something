using System;
using System.Collections.Generic;
using System.Linq;
using Database.EntityFramework;
using Service.VM.Company;
using Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace Service.Services.Company
{
    public class CompanyService : ICompanyService
    {
        private readonly ApplicationDbContext _dbContext;

        public CompanyService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<CompanyVM> GetCompanies(Guid userId)
        {
            var companies = _dbContext
                                    .CompanyUsers
                                    .Include(x => x.Company)
                                    .Where(x => x.UserId == userId)
                                    .Select(x => x.Company).ToList();

            var companiesVm = companies.Select(c => new CompanyVM(c.CompanyId, c.Name));
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
                    .Any(x => x.UserId == userId);
        }
    }
}
