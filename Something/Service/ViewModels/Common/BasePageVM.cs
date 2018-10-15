using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Service.ViewModels.Common
{
    public abstract class BasePageVM : IBasePageVM
    {
        public abstract int PageTypeId { get; set; }
    }
}
