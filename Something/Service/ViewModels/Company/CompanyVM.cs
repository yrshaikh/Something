namespace Service.ViewModels.Company
{
    public class CompanyVM
    {
        public CompanyVM(int companyId, string companyName)
        {
            Id = companyId;
            Name = companyName;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
    }
}
