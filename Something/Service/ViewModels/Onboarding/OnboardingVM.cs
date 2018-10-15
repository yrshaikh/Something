using Service.ViewModels.Common;
using Service.ViewModels.Enums;

namespace Service.ViewModels.Onboarding
{
    public class OnboardingVM : BasePageVM
    {
        public override int PageTypeId { get; set; } = (int)PageTypeEnum.Onboarding;
    }
}
