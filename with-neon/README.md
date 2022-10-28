# StepZen Example: `with-neon`

## Introduction

This project builds a GraphQL API connected to Neon using StepZen. [Neon](https://neon.tech) is a serverless PostgreSQL database build for scale.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-neon
```

Before you can run this example, you need to have a Neon instance. Which you can set up in the next section.

## Set up Neon

1. Sign in to your [Neon account](https://neon.tech), or create a new account.
2. Create a new project from the dashboard
3. Set a name for the new database
4. Copy the connection string from the dashboard

Seed the Neon database with the data in the `init.sql` file using the following command:

```bash
psql "YOUR_NEON_DSN" < init.sql
```

To import a Neon database, you need to run the command `stepzen import postgresql` and provide your Neon host, username, database name, and password to the prompts. StepZen will automatically create a GraphQL schema for your Neon database with a set of sample queries and mutations. To deploy your new GraphQL API, go to [run StepZen](#run-stepzen).

**Important:** Neon only allows access over SSL/TLS so in the file `config.yaml` you need to append `sslmode=require` to the DSN configuration. Also, the project id must be appended to the `uri`

```yaml
# config.yaml

configurationset:
  - configuration:
      name: mysql_config
      dsn: YOUR_NEON_DSN?user=YOUR_NEON_USERNAME&password=YOUR_NEON_PASSWORD&options=project=YOUR_NEON_PROJECT_ID&sslmode=require
```

> To get the database configuration, you need to open the Neon dashboard and open the database you want to connect. Here you copy the connection string from the "Connection Details" section and the project id from the "Settings" page.

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

A proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-neon`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
