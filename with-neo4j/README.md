# StepZen Example: `with-neo4j`

## Introduction

This project builds a GraphQL API connected to Neo4j using StepZen. Neo4j is a graphq database build for develooers, read the [complete blog post for this project here](https://neo4j.com/developer-blog/api-development-neo4j-graphql-stepzen/).

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-neo4j
```

Before you can run this example, you need to have a Neo4j instance. Which you can set up in the next section.

## Set up Neo4j

![Neo4j Sandbox Dashboard](./assets/neo4j-sandbox-new-database.png)

1. Go to https://sandbox.neo4j.com/ and sign up for a new account or sign in to your existing account
2. You will be taken to the sandbox dashboard after creating your account. Click on the "Movies" dataset to set up a new project from here.
3. Once you have selected the "movies" dataset, click on the "Create" button. This will create a new Neo4j graph database based on the movie dataset.

After these steps, we will have a Neo4j sandbox environment with a pre-populated movies database. We can now start building our GraphQL API using the Neo4j GraphQL Library.

![Neo4j Sandbox credentials](./assets/neo4j-sandbox-credentials.png)

You should paste these credentials in a new file called `.env`:

```text
NEO4J_CONNECT_URL=
NEO4J_PASSWORD=
```

## Run the Neo4j GraphQL Library

In the project directory, you can run:

```bash
npm install
npm start
```

This will run the Neo4j GraphQL Library based on the pre-generated GraphQL schema based on the contents of the Movies Neo4j graph database. You can also choose to run `npm run generate` and in this case the Neo4j GraphQL library will introspect the database and generate a GraphQL schema based on the labels and relationships in the database.

The GraphQL API will be available at `http://localhost:4000/graphql`. 

## Set up StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start/install-and-setup):

```bash
npm install -g stepzen
```

We'll be using StepZen using the Docker image as the Neo4j GraphQL Library is running locally. You can run the following command to start using Docker:

```bash
stepzen service start
```

This command will start the StepZen service in a Docker container and create a local configuration file at `~/.stepzen/stepzen-config.local.yaml`.

3. Log in to the StepZen CLI pointing to the local configuration:

```bash
stepzen login --config ~/.stepzen/stepzen-config.local.yaml
```

We can now use StepZen for local development and the CLI like when running StepZen in the cloud. 

4. In the directory `stepzen`, you can run:

```bash
stepzen start
```

This will start the GraphQL API at `http://localhost:5000/api/with-neo4j/__graphql`. The StepZen GraphQL schema is pointed towards `http://host.docker.internal:4000/graphql` which is the Neo4j GraphQL Library running locally.

## Add the New York Times API

The file `sample.config.yaml` contains the configuration for the New York Times API. You can copy the contents of this file to `stepzen/config.yaml` and replace the value for `api-key` with your own API key.

To get an API Key you need to sign up for a New York Times API key by following the instructions on the [developer page](https://developer.nytimes.com/get-started). After creating an account, you can [create an application](https://developer.nytimes.com/my-apps) and find the API key for the free New York Times API here.


```yaml
configurationset:
  - configuration:
      name: nyt
      apiKey: ADD_YOUR_API_KEY_HERE
```

After adding the API key, you can run `stepzen service start` again and the New York Times API will be available at `http://localhost:5000/api/with-neo4j/__graphql`.

## Try out the GraphQL API

You can now run the following query to get the top 3 movies and their reviews:

```graphql
{
  movies(options: {limit: 3}) {
    title
    reviews {
        headline
      }
  }
}
```

> Don't forget to set the value for `limit` to 3, as the NYT REST API only allows a set number of requests per time.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.







