using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Views.Company
{
    public class CompanyViewModel
    {
        public CompanyViewModel(int companyId, string companyName)
        {
            Id = companyId;
            Name = companyName;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
    }
}
