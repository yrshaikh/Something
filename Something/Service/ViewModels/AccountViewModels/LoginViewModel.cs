using Service.ViewModels.Enums;
using System.ComponentModel.DataAnnotations;

namespace Service.ViewModels.AccountViewModels
{
    public class LoginViewModel : AuthViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }

        public override int PageTypeId { get; set; } = (int)PageTypeEnum.Login;
    }
}
