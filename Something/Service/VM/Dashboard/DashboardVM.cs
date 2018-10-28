using Service.VM.Common;
using Service.VM.Enums;

namespace Service.VM.Dashboard
{
    public class DashboardVM : BasePageVM
    {
        public override int PageTypeId { get; set; } = (int)PageTypeEnum.Home;
    }

}
