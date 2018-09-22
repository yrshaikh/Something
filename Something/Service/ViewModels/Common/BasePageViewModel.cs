using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Service.ViewModels.Common
{
    public abstract class BasePageViewModel : IBasePageViewModel
    {
        public abstract int PageTypeId { get; set; }

        public string Serialize<T>(T input)
        {
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            return JsonConvert.SerializeObject(input, serializerSettings);
        }
    }
}
