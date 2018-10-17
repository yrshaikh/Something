using Service.VM.Enums;
using System.ComponentModel.DataAnnotations;

namespace Service.VM.Account
{
    public class LoginVM : AuthVM
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public bool RememberMe { get; set; }

        public override int PageTypeId { get; set; } = (int)PageTypeEnum.Login;
    }
}
