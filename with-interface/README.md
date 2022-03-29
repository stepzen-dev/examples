# StepZen Example: `with-interface`

## Introduction

This project builds a GraphQL API that combines multiple different REST APIs that use the same interface, and shows how to limit the queries executed when using StepZen.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/signup) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

<!-- UPDATE THE DIRECTORY BELOW -->

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-interface
```

## Run StepZen

Open your terminal and install the StepZen CLI:

```
npm install -g stepzen
```

You need to login here using the command:

```
stepzen login
```

After you've installed the CLI and logged in, run:

```
stepzen start
```

A proxy of the GraphiQL playground becomes available at http://localhost/5001 (in example http://localhost:5001/api/with-interface), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

This example defines an "echo" interface for the data returned by two services, [httpbin](https://httpbin.org/)'s echo service and Postman's echo service. You can call those services directly using the `httpbin` and `postman` queries in the schema. 

The "echo" query that's defined takes a "provider" parameter. There are two queries that supply the "echo" query, httpbinIQ and postmanIQ. Those two queries are sequence queries. The first step in the sequence (`filterHttpbin` or `filterPostman`) will only return rows if the provider parameter matches the name of the service, and the second step is either the `httpbin` or `postman` query.

Here's a query you can use to see how this works:

```
query MyQuery($provider: String!) {
  filterHttpbin(provider: $provider) {
    provider
  }
  filterPostman(provider: $provider) {
    provider
  }
  echo(provider: $provider) {
    url
  }
}
```

Providing variables:

```
{"provider": "postman"}
```

results in:

```
{
  "data": {
    "filterHttpbin": [],
    "filterPostman": [
      {
        "provider": "postman"
      }
    ],
    "echo": {
      "url": "https://postman-echo.com/get"
    }
  }
}
```

and providing variables:

```
{"provider": "httpbin"}
```

results in

```
{
  "data": {
    "filterHttpbin": [
      {
        "provider": "httpbin"
      }
    ],
    "filterPostman": [],
    "echo": {
      "url": "https://httpbin.org/get"
    }
  }
}
```

Since each query that supplies the interface query will get executed, but the first step in one them will return no rows, only one call to the correct backend is made.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
