using System.ComponentModel.DataAnnotations.Schema;

namespace Database.Entities
{
    public class CompanyUsers
    {
        public string UserId { get; set; }
        public int CompanyId { get; set; }

        [ForeignKey(nameof(CompanyId))]
        public Company Company { get; set; }
    }
}
