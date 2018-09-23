using Service.ViewModels.Enums;
using System.ComponentModel.DataAnnotations;

namespace Service.ViewModels.AccountViewModels
{
    public class RegisterViewModel : AuthViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public override int PageTypeId { get; set; } = (int)PageTypeEnum.Register;
    }
}
