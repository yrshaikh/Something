# Something

## Start docker
1. `docker-compose up`

## Setup database in docker
1. Open the command prompt and cd to the `Database.EntityFramework` project and run `dotnet ef migrations add InitialCreate`.
2. Run `Update-Database` from the package manager console after selecting `Database.EntityFramework` project.

Run `docker-compose down` to delete all existing tables and redo step 1 & 2.

## Connect to MySQL
1. Download MySql Workbench
2. Connect using these credentials
    1. Database=db
    2. Uid=root
    3. Pwd=mysql