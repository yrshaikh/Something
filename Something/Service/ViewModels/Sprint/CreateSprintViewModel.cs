using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Service.ViewModels.Sprint
{
    public class CreateSprintViewModel
    {
        [Required]
        public int SprintId { get; set; }

        [Required]
        public int ProjectId { get; set; }

        [Required]
        [MinLength(3)]
        public string Name { get; set; }

        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
