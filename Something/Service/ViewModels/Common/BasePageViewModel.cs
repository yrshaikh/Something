using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Service.ViewModels.Common
{
    public abstract class BasePageViewModel : IBasePageViewModel
    {
        public abstract int PageTypeId { get; set; }
    }
}
