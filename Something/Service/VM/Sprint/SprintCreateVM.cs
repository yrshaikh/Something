﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Service.VM.Sprint
{
    public class SprintCreateVM
    {
        [Required]
        public int ProjectId { get; set; }

        [Required]
        [MinLength(3)]
        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
