using Service.ViewModels.Common;

namespace Service.ViewModels.AccountViewModels
{
    public abstract class AuthViewModel : BasePageViewModel
    {
        public bool FailedAttempt { get; set; }
        public bool ServerError { get; set; }
    }
}
