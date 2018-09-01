using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Text;

namespace Database.EntityFramework
{
    public class ApiContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApiContextFactory()
        {
        }

        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<ApplicationDbContext>();
            builder.UseMySql("Server=127.0.0.1;Database=db;Uid=root;Pwd=mysql;");
            return new ApplicationDbContext(builder.Options);
        }
    }
}
