# StepZen Example: `with-planetscale`

## Introduction

This project builds a GraphQL API connected to PlanetScale using StepZen. [PlanetScale](https://planetscale.com) is a modern MySQL-compatible serverless database.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-planetscale
```

Before you can run this example, you need to have a PlanetScale instance. Which you can set up in the next section.

## Import a PlanetScale database

To import a PlanetScale database, you need to run the command `stepzen import mysql` and provide your PlanetScale host, username, database name, and password to the prompts. StepZen will automatically create a GraphQL schema for your PlanetScale database with a set of sample queries and mutations. To deploy your new GraphQL API, go to [run StepZen](#run-stepzen).

**Important:** PlanetScale only allows access over SSL/TLS so in the file `config.yaml` you need to append `?tls=true` to the DSN configuration:

```
configurationset:
  - configuration:
      name: mysql_config
      dsn: REPLACE_WITH_YOUR_USERNAME:REPLACE_WITH_YOUR_PASSWORD@tcp(REPLACE_WITH_YOUR_HOST)/REPLACE_WITH_YOUR_DATABASE?tls=true
```


> To get the database configuration, you need to open the PlanetScale dashboard and open the database you want to connect. Here you need to copy the connection details from the `main` branch by clicking "Connect" and selecting "Connect with General" in the dropdown.

## Set up PlanetScale

Setting up PlanetScale can be done in a few steps. First, you need to create an account, after which you can create and populate a new PlanetScale instance.

### Create account and instance

1. Create an account on [PlanetScale](https://planetscale.com)

2. Click the "Create a database" button on your organization's overview page.
   - Name your database using lowercase, alphanumeric characters. You may also use dashes or underscores
   - Select a region. For the lowest latency, select a region near you or your application's hosting location
   - Finally, click the "Create database" button to deploy your database.

> You can also use the [PlanetScale CLI](https://planetscale.com/cli) to create databases:
> `pscale database create [DATABASE_NAME]`

### Insert data

We'll be seeding the database using `mysql` from our terminal. To connect to the PlanetScale database from your terminal, you need to copy the connection details from the `main` branch by clicking "Connect" and selecting "Connect with MySQL CLI" in the dropdown. After copying the connection string, you should append ` < init.sql` to it:

```bash
mysql -h [PLANETSCALE_HOST] -u [PLANETSCALE_USERNAME] -p[PLANETSCALE_PASSWORD] --ssl-mode=VERIFY_IDENTITY --ssl-ca=/etc/ssl/cert.pem < init.sql
```

> Alternatively, you can get the host, username, and password by clicking "Connect with General" and copying these values in the command above. Make sure to not leave a space in-between `-p` and the actual password.

The database will now get seeded with the data from `init.sql`.

You can verify this from the PlanetScale Dashboard by clicking on the "Branches" tab in the database navigation. This will bring you to the branch page for your database:
- Click on the main branch, which will take you to the branch page for your main branch.
- Click on the "Console" tab in the branch navigation, and this will open up a web console connected to your database branch.
- You can confirm that the tables have been added by running the following command in the web console: `SHOW TABLES;`.
- Run the following command to confirm in example the address data has been added to the table: `SELECT * from address;`.

### Publish database

Promote your database branch to production, as the `main` branch currently is in development mode. To promote a branch to production:
- Click "Overview" in the navigation, and you'll see a banner with information about promoting to production.- Click the "Promote branch" button.
- In the modal that opens, select the branch you want to promote to production.
- Finally, click "Promote branch".

After promoting the database to production, go back to [import a PlanetScale database](#import-a-planetscale-database) to create the GraphQL API.

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start/install-and-setup):

```bash
npm install -g stepzen
```

You need to login here using the command:

```bash
stepzen login
```

After you've installed the CLI and logged in, run:

```bash
stepzen start
```

A proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-planetscale`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
