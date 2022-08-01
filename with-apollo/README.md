# Overview

You can use [StepZen](https://www.stepzen.com) to create and deploy subgraphs  which with a little additional effort, are [Apollo Federation](https://www.apollographql.com/docs/federation/) ready. Let's walk you through how to get it done.

For this example we are creating two subgraphs using mocked data. 

 - `customers` - provides customer information from a MySQL database (see [customer subgraph](./customer))
 - `returns` - provides returns locations for businesses from a REST api (see [returns subgraph](./returns))

We will federate them so that a business' returns locations close to a customer's address can be requested. For this we will use Apollo's managed federation. This means that the  supergraph's definition is maintained within your Apollo account.

# Setup

We assume that you are familiar with how [Apollo Federation](https://www.apollographql.com/docs/federation/) works. We will only cover the basics. We will be doing an Apollo Studio supergraph creation.
  1. Signup for [Apollo Studio](https://studio.apollographql.com/signup?from=%2F&type=prod) 
  1. [Install rover](https://www.apollographql.com/docs/rover/getting-started/)
  1. Sign up with [StepZen](https://stepzen.com/signup). 
  1. Install the StepZen CLI and login to your StepZen account via the CLI as described [here](https://stepzen.com/getting-started).
  1. Create a deployed supergraph in Apollo Studio named `lynx`. You can use any other name if you wish, but you will need to modify our examples to replace `lynx` with your chosen name whenever you need to provide the supergraph Graph ID.

## Deploy the Customers subgraph

Deploy the `customers` subgraph into your StepZen account. The Code for this is in the 
[customers](./customers) folder. Run the following command, this should work on most OS Shells.

```
(cd customers ; stepzen deploy)
```

This results in a StepZen deployed GraphQL `customers` endpoint at:
```
https://ACCOUNT.stepzen.net/subgraph/customers/__graphql
```
with `ACCOUNT` replaced by the StepZen account you are logged into.

## Introspect and publish the customers subgraph into your Apollo Federation supergraph. 

Copy paste the commands from the 'Update Schema' button
in Apollo Studio for your `lynx` subgraph, and selecting the introspection tab.

You will need to:
  1. choose the `--routing-url` to be the StepZen customers endpoint.
  1. choose the subgraph `-name` to be `customers`
  1. provide the appropriate supergraph ID to replace `lynx-n321j`
  1. provide your `APOLLO_KEY` which we have masked here.

```
rover subgraph introspect \
  https://ACCOUNT.stepzen.net/subgraph/customers/__graphql | \
  APOLLO_KEY=service:lynx-x321j:xxxxxxxxxxxxxxxxxxxxxx \
  rover subgraph publish lynx-n321j@current \
  --name customers --schema - \
  --routing-url https://ACCOUNT.stepzen.net/subgraph/customers/__graphql
```

This runs a sequence of two commands, 

  1. `rover subgraph introspect` pulls the subgraph's federation schema from
the deployed `customers` endpoint.
  1. `rover subgraph publish` publishes the definition of the `customers` subgraph
into the `lynx` supergraph's schema.

## Do the same for the returns subgraph

Deploy the `returns` subgraph into your StepZen account, the code is in the 
[returns]{./returns) folder.

```
(cd returns ; stepzen deploy)
```

This results in a StepZen deployed GraphQL `returns` endpoint at:
```
https://ACCOUNT.stepzen.net/subgraph/returns/__graphql
```
with `ACCOUNT` replaced by your account.

## Introspect and publish the `returns` subgraph.

Be careful to replace the same things as earlier.

For example:
```
rover subgraph introspect \
  https://ACCOUNT.stepzen.net/subgraph/returns/__graphql | \
  APOLLO_KEY=service:lynx-x321j:xxxxxxxxxxxxxxxxxxxxxx \
  rover subgraph publish lynx-n321j@current \
  --name returns --schema - \
  --routing-url https://ACCOUNT.stepzen.net/subgraph/returns/__graphql
```

## Run Apollo router

Now run the Apollo router to federate our two subgraphs, `customers` and `returns`. The router is run against the `lynx` supergraph definition we uploaded the subgraphs to, thus is using managed federation.

Please follow the instructions in [router/README.md](router/README.md).

Once the router is running you can visit http://localhost:4000 to execute requests

Execute this request to see the federation in action, where the customer
is pulled from the `customers` subgraph and the return stores from
close to the customer's address from the `returns` subgraph.
```graphql
{
  getCustomer(id: 1) {
    id
    name
    email
    address {
      street
      city
      returnStores {
        address
        business
      }
    }
  }
}
```

# StepZen integration with Apollo Federation

Here we describe how the StepZen schemas were modified
to have the `returns` subgraph add value to the `customers` subgraph
through Apollo Federation.

## customers

The `customers` subgraph was initially created using `stepzen import mysql`
to create its GraphQL types and fields.

For federation [`address.graphql`](customers/address.graphql) was added
to mark the `Address` type as a [federation entity](https://www.apollographql.com/docs/federation/entities/). This allows the `Address` type to have its fields resolved across multiple subgraphs, `customers` and `returns` in this case.

`Address` was made into a entity by defining its `id` field as one that can uniquely identify and fetch an instance using `@key`.

```graphql
extend type Address @key(fields: "id")
```

That's it, as StepZen defines GraphQL schemas declaratively,
there is nothing more to do, no coding of reference resolvers.

## returns

The `returns` subgraph was initially created using `stepzen import curl`
to create its GraphQL types and fields from introspection of
a REST API endpoint.

For federation `returns` adds value to the `Address` type by providing
business returns locations based upon a city.

`returns` adds the `returnStores` field to `Address` declaratively indicating
how that field is resolved.


```graphql
type Address @key(fields: "id") {
  id: Int!
  city: String @external
  returnStores: [ReturnStoreEntry] @materializer(query: "returnStores")
}
```
This is in the [`returns/address.graphql`](returns/address.graphql) file.

Like `customers` `Address` is annotated with `@key` so the subgraphs have
a common understanding of unique identifiers.

`city` field is marked as `@external` which indicates to StepZen and Apollo Federation that this subgraph (`returns`) does not know how to resolve it, so the federation layer must provide a value if it is needed.

`returnStores` is the field that this subgraph (`returns`) is adding into the `Address` type. Its value is resolved using the `returnStores` field of `Query`
which is defined to pull values from a REST API.

```graphql
type Query {
  returnStores(city: String): [ReturnStoreEntry]
    @rest(endpoint: "https://json2api-returns-p2axj4bzta-uw.a.run.app/returns?q=city+eq+$city")
}
```

StepZen automatically maps the `city` field in `Address` to the `city` argument of `Query.returnStores`.

That's it again! A type is simply extended by this subgraph declaratively by adding fields that reference Query fields the subgraph already provides and indicating the primary key of the type and any external fields needed as arguments.

## Authorization

In this getting-started StepZen endpoints are configured to be 
open endpoints to simplify the setup for Apollo Federation.

Please follow [with-authorization](../with-authorization/README.md) for instructions
on how to setup protected StepZen endpoint with Apollo Federation.
