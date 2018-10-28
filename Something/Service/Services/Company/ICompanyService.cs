using Service.VM.Company;
using System;
using System.Collections.Generic;

namespace Service.Services.Company
{
    public interface ICompanyService
    {
        IEnumerable<CompanyVM> GetCompanies(Guid userId);
        int CreateCompany(string value, Guid createdBy);
        bool HasAnyCompany(Guid userId);
    }
}
