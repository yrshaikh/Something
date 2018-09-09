using System.ComponentModel.DataAnnotations;

namespace Service.ViewModels.Project
{
    public class ProjectCreateViewModel
    {
        [Required]
        public int CompanyId { get; set; }

        [Required]
        [MinLength(3)]
        public string Name { get; set; }
    }
}
