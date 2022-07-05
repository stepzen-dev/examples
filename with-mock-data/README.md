# StepZen Example: `with-mock-data`

## Introduction

This project builds a GraphQL API using mock data, using the custom directives `@mock` and `@mockfn`. With StepZen you can mock data for every data source that you connect in a GraphQL schema.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-mysql
```

You can now run this example in the next step.

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

A proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-mock-data`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
