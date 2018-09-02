using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Database.Entities
{
    public class CompanyUsers
    {
        [Key]
        public int CompanyUsersId { get; set; }
        public string UserId { get; set; }
        public int CompanyId { get; set; }

        [ForeignKey(nameof(CompanyId))]
        public Company Company { get; set; }
    }
}
