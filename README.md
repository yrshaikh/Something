# Something

## Start docker
1. `docker-compose up`

## Setup database in docker
1. Open the command prompt and cd to the `Database.EntityFramework` project and run `dotnet ef migrations add InitialCreate`.
2. Run `Update-Database` from the package manager console after selecting `Database.EntityFramework` project.
    1. Not supported on MAC - [Workaround](Docs/EF-ON-MAC/README.md)

Run `docker-compose down` to delete all existing tables and redo step 1 & 2.

## Connect to MySQL
1. Download MySql Workbench
2. Connect using these credentials
    1. Database=db
    2. Uid=root
    3. Pwd=mysql

## Run client side
1. Run `yarn install` in the /WebApplication directory to install dependency libs
2. Run `yarn build` in the same directory to build using webpack

## Client side test
1. Run `yarn test` to run all tests (`yarn test {testname}` to run individual test)

## How to run
1. Open command prompt and cd to the `WebApplication` folder.
2. Run `dotnet run` command.
3. Find the url in the output, something like `Now listening on: http://localhost:56758`.


To add any new dependencies in the client side, please use `yarn add` (not `npm`) and don't forget to commit the updated 
`yarn.lock` file.
