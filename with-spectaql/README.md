# StepZen Example: `with-spectaql` 

## Introduction

This project builds static documentation for your GraphQL API using the open-source library [SpectaQL](https://github.com/anvilco/spectaql).

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/signup) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```
git clone https://github.com/stepzen-dev/examples.git
cd with-spectaql
```

Before you can run this example, you need to have a GraphQL API deployed on StepZen. 

## Set up SpectaQL

Before creating static documentation using SpectaQL you need to have a GraphQL API deployed to StepZen. If you don't have one yet, you can deploy the GraphQL schema in the `stepzen` directory. 

To deploy the GraphQL API, you need to run `stepzen start` from the directory of this project. Make sure you've followed the steps to log in to StepZen first. 

The deployed endpoint for your StepZen GraphQL API needs to be added to the configuration file for SpectaQL, which is called `config.yml`. In this file, you need to replace `REPLACE_WITH_YOUR_GRAPHQL_ENDPOINT` with your StepZen endpoint and `REPLACE_WITH_YOUR_API_KEY` with your StepZen API key. You can find this key in [My StepZen](https://stepzen.com/account) or using the CLI (run `stepzen whoami --apikey`): 

```yaml
spectaql:
  logoFile: ./logo.svg

introspection:
  url: 'REPLACE_WITH_YOUR_GRAPHQL_ENDPOINT'
  headers:
    Authorization: 'apikey REPLACE_WITH_YOUR_API_KEY'

info:
  title: StepZen - Frankfurter GraphQL API
  description:
    'Frankfurter is an open-source API for current and historical foreign exchange rates published by the European Central Bank. Using GraphQL!

    [View GraphiQL playground](REPLACE_WITH_YOUR_GRAPHQL_ENDPOINT)'
  contact:
    name: StepZen Support
    url: https://stepzen.com/docs
    email: support@stepzen.com

servers:
  - url: 'REPLACE_WITH_YOUR_GRAPHQL_ENDPOINT'
    description: Production
    production: true
```

The library SpectaQL needs to be installed globally on your machine, which you can do with either npm or Yarn:

```
npm install -g spectaql
# OR
yarn global add spectaql
```

To generate the static documentation, you need to run:

```
npx spectaql config.yml
```

By default, this will generate the documentation based on your StepZen GraphQL API in the `public` directory. You can either open the generated `index.html` file in your browser or add the `-D` flag and view your docs live by visiting `http://localhost:4400/` in the browser.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
