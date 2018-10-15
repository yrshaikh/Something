using Service.ViewModels.Common;
using Service.ViewModels.Enums;

namespace Service.ViewModels.Home
{
    public class HomeVM : BasePageVM
    {
        public override int PageTypeId { get; set; } = (int)PageTypeEnum.Home;
    }
}
