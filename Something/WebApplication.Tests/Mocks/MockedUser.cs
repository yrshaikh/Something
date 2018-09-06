using Common.Models;
using Microsoft.AspNetCore.Identity;
using Moq;
using System;
using System.Security.Claims;

namespace WebApplication.Tests.Mocks
{
    public static class MockedUser
    {
        public static Mock<UserManager<ApplicationUser>> GetUserManager(string userId)
        {
            var userStoreMock = new Mock<IUserStore<ApplicationUser>>();
            var userManager = new Mock<UserManager<ApplicationUser>>(userStoreMock.Object, null, null, null, null, null, null, null, null);
            userManager.Setup(x => x.GetUserId(It.IsAny<ClaimsPrincipal>())).Returns(userId);
            return userManager;
        }
    }
}
