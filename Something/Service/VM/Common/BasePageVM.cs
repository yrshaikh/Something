using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Service.VM.Common
{
    public abstract class BasePageVM : IBasePageVM
    {
        public abstract int PageTypeId { get; set; }
    }
}
