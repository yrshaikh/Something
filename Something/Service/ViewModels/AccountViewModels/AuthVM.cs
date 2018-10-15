using Service.ViewModels.Common;

namespace Service.ViewModels.AccountViewModels
{
    public abstract class AuthVM : BasePageVM
    {
        public bool FailedAttempt { get; set; }
        public bool ServerError { get; set; }
    }
}
