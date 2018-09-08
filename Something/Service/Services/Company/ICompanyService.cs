using Service.ViewModels.Company;
using System;
using System.Collections.Generic;

namespace Service.Services.Company
{
    public interface ICompanyService
    {
        IEnumerable<CompanyViewModel> GetCompanies(Guid userId);
        int CreateCompany(string value, Guid createdBy);
        bool HasAnyCompany(Guid userId);
    }
}
