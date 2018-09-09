using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Database.Entities
{
    public class Sprint
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SprintId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public int ProjectId { get; set; }

        [ForeignKey(nameof(ProjectId))]
        public Project Project { get; set; }

        public bool IsClosed { get; set; }
    }
}
