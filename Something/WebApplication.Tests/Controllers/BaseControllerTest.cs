using System;

namespace WebApplication.Tests.Controllers
{
    public class BaseControllerTest
    {
        protected static readonly string mockedUserId = "ec18d8c3-ceac-4a8f-871d-97c9912ac68e";
        protected readonly Guid mockedUserGuid = Guid.Parse(mockedUserId);
    }
}