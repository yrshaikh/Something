using Service.ViewModels.Company;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Company
{
    public interface ICompanyService
    {
        IEnumerable<CompanyViewModel> GetCompanies();
        Task<int> CreateCompanyAsync(string value, Guid createdBy);
    }
}
