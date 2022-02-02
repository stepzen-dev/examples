# StepZen Example: `with-postgres`

## Introduction

This project builds a GraphQL API connected to your Postgres database using StepZen. We will use the `@dbquery` directive to generate our GraphQL schema.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd with-postgres
```

Before you can run this example, you need to have a Postgres database. Which you can either run in the cloud or set up locally with Docker.

## Run a database in the cloud

The easiest way to try out this example is by running a database in the cloud.

<!-- Insert examples !-->

## Creating a local database with Docker

Alternatively, you can create a local database using our Docker script. This requires you to have Docker installed (no prior knowledge needed) and using ngrok to create a TCP tunnel so you can link it to StepZen.

### Prerequisites

- [Docker (Mac/Windows)](https://www.docker.com/products/docker-desktop)
- [ngrok account](https://ngrok.com/)
- [ngrok installed (Mac/Window)](https://ngrok.com/download)

### Todo

Make sure you have an account for [ngrok](<(https://ngrok.com/)>) and have linked your authtoken by running:

```bash
ngrok authtoken [YOUR_AUTH_TOKEN]
```

After doing so start the Docker container with the Postgres database from this directory:

```bash
docker-compose up -d
```

This will start the container with the Postgres server, makes it available on port `5432` and prepopulates it with the data from `./init.sql`.

To make this database available to other services outside your private network, you need to create a TCP tunnel. For this ngrok will be used:

```bash
ngrok tcp 5432
```

Ngrok will return the forwarding address for the local Postgres database, which will looks something like this: `tcp://0.tcp.ngrok.io:15650`.

You need to add this to the file `./config.yaml` where you need to replace `NGROK_TUNNEL` with (in example) `0.tcp.ngrok.io:15650`:

```yaml
configurationset:
  - configuration:
      name: postgresql_config
      uri: postgresql://stepzen:stepzenpasswd@0.tcp.ngrok.io:15650/stepzen_demo
```

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start). You need to login here using the command: `stepzen login`.

Start the GraphQL by running `stepzen start`. After you've followed the prompts (you can accept the suggested endpoint name or add your own), a proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/happy-bunny`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
