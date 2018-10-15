using Service.ViewModels.Common;
using Service.ViewModels.Enums;

namespace Service.ViewModels.Dashboard
{
    public class DashboardVM : BasePageVM
    {
        public override int PageTypeId { get; set; } = (int)PageTypeEnum.Home;
    }

}
