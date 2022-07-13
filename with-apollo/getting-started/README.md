# Overview

If you use Apollo Federation to federate subgraphs, you can use StepZen to build those subgraphs. With little effort, the StepZen created and deployed subgraphs are Apollo Federation ready. Let's walk you through how to get it done.

For this example we are federating two subgraphs, both StepZen endpoints, that will be running in your account.

 - `customers` - provides customer information from a MySQL database
 - `returns` - provides returns locations for businesses

Note, both subgraphs contain mocked up data.

We will federate using Apollo Federation so that business' returns locations close to a customer's address can be requested.

In each case the SDL and configuration for the subgraphs has already been setup, each subgraph's `README.md` provides information on how the subgraphs were easily created.

# Running the example

# Setup

We assume that you are familiar with how [Apollo Federation[(https://www.apollographql.com/docs/federation/)] works. We will only cover the basics. We will be doing an Apollo Studio supergraph creation.
  1. [Signup for Apollo Studio](https://studio.apollographql.com/signup?from=%2F&type=prod) 
  1. Create a supergraph in Apollo Studio named `lynx`, you can use any name but we use `lynx` to make it clear when you need to provide the supergraph Graph ID.
  1. [Install rover](https://www.apollographql.com/docs/rover/getting-started/)

We also assume you have [signed up with](https://stepzen.com/signup) StepZen, [installed the StepZen CLI and are already logged into your account](https://stepzen.com/getting-started).

## Customers subgraphpo

Deploy the customers subgraph into your StepZen account:

```
cd customers
stepzen start
```

This results in a StepZen deployed GraphQL customers endpoint at:
```
https://ACCOUNT.stepzen.net/subgraph/customers/__graphql
```
with `ACCOUNT` replaced by your account.

Introspect and publish the `customers` subgraph into your Apollo Federation supergraph.  Copy paste the commands from the 'Update Schema' button
in Apollo Studio for your subgraph, and selecting the introspection tab.

You will need to modify:
  - the introspect and `--routing-url` endpoints to be the deployed customers endpoint.
  - the subgraph `-name` to be `customers`

For example, here the lynx's supergraph graph ID is `lynx-n321j` and we have masked the APOLLO_KEY:
```
rover subgraph introspect \
  https://ACCOUNT.stepzen.net/subgraph/customers/__graphql | \
  APOLLO_KEY=service:lynx-x321j:xxxxxxxxxxxxxxxxxxxxxx \
  rover subgraph publish lynx-n321j@current \
  --name customers --schema - \
  --routing-url https://ACCOUNT.stepzen.net/subgraph/customers/__graphql
```

`rover subgraph introspect` pulls the subgraph's federation schema from
the deployed customers endpoint.

`rover subgraph publish` publishes the definition of the `customers` subgraph
into the super-graph's schema.

## Returns subgraph

Now the same steps are repeated for the `returns` subgraph.`

Deploy the customers subgraph into your StepZen account:

```
cd returns
stepzen start
```

This results in a StepZen deployed GraphQL customers endpoint at:
```
https://ACCOUNT.stepzen.net/subgraph/returns/__graphql
```
with `ACCOUNT` replaced by your account.

Introspect and publish the `returns` subgraph into your Apollo Federation
supergraph, following the previous instructions for `customers` but using `returns` and its deployed endpoint.

For example:
```
rover subgraph introspect \
  https://ACCOUNT.stepzen.net/subgraph/returns/__graphql | \
  APOLLO_KEY=service:lynx-x321j:xxxxxxxxxxxxxxxxxxxxxx \
  rover subgraph publish lynx-n321j@current \
  --name returns --schema - \
  --routing-url https://ACCOUNT.stepzen.net/subgraph/returns/__graphql
```

## Supergraph in Apollo Studio

stuff about looking at the supoer graph definition with managed federation.

## Run the federation server

TODO

## Run queries in Apollo Studio

Running queries including with the merged types.

## How the StepZen subgraphs were extended(better word).

