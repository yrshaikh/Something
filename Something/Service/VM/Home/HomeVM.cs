using Service.VM.Common;
using Service.VM.Enums;

namespace Service.VM.Home
{
    public class HomeVM : BasePageVM
    {
        public override int PageTypeId { get; set; } = (int)PageTypeEnum.Home;
    }
}
