##  Why?

`update database` is not supported with Visual Studio on MAC - https://stackoverflow.com/a/45388200/1182982

## What is the workaround?

- Start the docker using `docker-compose up`
- Once the docker is started, connect mysql workbench or any client and run the script - [`create-database-script.sql`](create-database-script.sql)