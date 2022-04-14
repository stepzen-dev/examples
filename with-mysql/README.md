# StepZen Example: `with-mysql`

## Introduction

This project builds a GraphQL API connected to your MySQL database using StepZen. We will use the `@dbquery` directive to generate our GraphQL schema.

For a step-by-step walkthrough of this example, please go to [Getting started with a MySQL database](https://stepzen.com/docs/quick-start/with-database-mysql) on StepZen.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-mysql
```

Before you can run this example, you need to have a MySQL database. Which you can either run in the cloud or set up locally with Docker.

## Run a database in the cloud

The easiest way to try out this example is by running a database in the cloud.

If you don't have a database running in the cloud yet, you can try our read-only mocked MySQL database:

<details>
	<summary>Click to show credentials!</summary>

- host: `db.introspection.stepzen.net`
- database: `introspection`
- username: `testUserIntrospection`
- password: `HurricaneStartingSample1934`

You can copy the file `sample.config.yaml` to a new `config.yaml` file:

```bash
cp sample.config.yaml config.yaml
```

Replace the contents of `config.yaml` with the following:

```yaml
# config.yaml

configurationset:
  - configuration:
      name: mysql_config
      dsn: testUserIntrospection:HurricaneStartingSample1934@tcp(db.introspection.stepzen.net)/introspection
```

</details>

## Creating a local database with Docker

The best way to run this MySQL Database is by using our Docker script. This requires you to have Docker installed (no prior knowledge needed) and using ngrok to create a TCP tunnel so you can link it to StepZen.

### Prerequisites

- [Docker (Mac/Windows)](https://www.docker.com/products/docker-desktop)
- [ngrok account](https://ngrok.com/)
- [ngrok installed (Mac/Window)](https://ngrok.com/download)

### Getting Started:

Make sure you have an account for [ngrok](https://ngrok.com/) and have linked your `authtoken` by running:

```bash
ngrok authtoken [YOUR_AUTH_TOKEN]
```

After doing so start the Docker container with the MySQL database from this directory:

```bash
docker-compose up -d
```

This will start the container with the MySQL server, makes it available on port `3306` and prepopulates it with the data from `./init.sql`.

To make this database available to other services outside your private network, you need to create a TCP tunnel. For this ngrok will be used:

```bash
ngrok tcp 3306
```

You need to add this to the file `./config.yaml` where you need to replace `{{ngrok_tunnel}}` with (in example) `0.tcp.ngrok.io:15650`:

```yaml
# config.yaml

configurationset:
  - configuration:
      name: mysql_config
      dsn: testUserIntrospection:HurricaneStartingSample1934@tcp({{ngrok_tunnel}})/introspection
```

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

A proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-mysql`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
