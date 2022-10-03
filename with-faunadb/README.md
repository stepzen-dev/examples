# StepZen Example: `with-faunadb`

## Introduction

This project builds a GraphQL API that composes data from FaunaDB and GitHub, by combining the [FaunaDB GraphQL API](https://docs.fauna.com/fauna/current/api/graphql) with the [GitHub GraphQL API](https://docs.github.com/en/graphql).

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/signup) first.

Alternatively, you can login using `stepzen login --public` without signing up, but note that your API will be publicly accessible.

Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-faunadb
```

Before running this example, you need to set up a FaunaDB instance and retrieve your GitHub personal access token.

## Set up FaunaDB

To use FaunaDB, you should complete the [set up instructions](https://docs.fauna.com/fauna/current/learn/quick_start/gql_quick_start) for GraphQL and upload the following GraphQL schema:

```graphql
type Highlight {
  repository: Repository! @relation
}

type Repository {
  owner: String!
  name: String!
  coverImage: String
  shortDescription: String
}

type Query {
  highlights: [Highlight]!
  repositories: [Repository]!
}
```

And get your FaunaDB GraphQL endpoint URL and API key from the [FaunaDB dashboard](https://dashboard.fauna.com/). See [here](https://docs.fauna.com/fauna/current/api/graphql/endpoints) for more information on how to get your endpoint URL and API key.

## Get a GitHub personal access token

To use the GitHub GraphQL API, you'll need to [create a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with the `repo` scope.

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start). You need to login here using the command: `stepzen login`.

You can copy the file `sample.config.yaml` to a new `config.yaml` file:

```
cp sample.config.yaml config.yaml
```

And enter your credentials from FaunaDB and GitHub into the `config.yaml` file:

```yaml
configurationset:
  - configuration:
      name: faunadb
      authorization: Basic YOUR_API_KEY
  - configuration:
      name: github
      authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN
```

> If your FaunaDB endpoint is not `https://graphql.us.fauna.com/graphql` please update all references to it in the `graphql-01/index.graphql` file.

Start the GraphQL by running `stepzen start`. After you've followed the prompts (you can accept the suggested endpoint name or add your own), a proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-faunadb`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
