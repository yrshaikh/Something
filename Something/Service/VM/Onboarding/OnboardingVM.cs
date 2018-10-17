using Service.VM.Common;
using Service.VM.Enums;

namespace Service.VM.Onboarding
{
    public class OnboardingVM : BasePageVM
    {
        public override int PageTypeId { get; set; } = (int)PageTypeEnum.Onboarding;
    }
}
