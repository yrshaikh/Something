using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace WebApplication.Utils
{
    public static class JsonSerializer
    {
        public static string Serialize<T>(T input)
        {
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            return JsonConvert.SerializeObject(input, serializerSettings);
        }
    }
}
