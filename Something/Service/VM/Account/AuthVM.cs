using Service.VM.Common;

namespace Service.VM.Account
{
    public abstract class AuthVM : BasePageVM
    {
        public bool FailedAttempt { get; set; }
        public bool ServerError { get; set; }
    }
}
