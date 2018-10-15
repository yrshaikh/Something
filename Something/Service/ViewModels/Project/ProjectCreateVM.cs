using System.ComponentModel.DataAnnotations;

namespace Service.ViewModels.Project
{
    public class ProjectCreateVM
    {
        [Required]
        public int CompanyId { get; set; }

        [Required]
        [MinLength(3)]
        public string Name { get; set; }
    }
}
