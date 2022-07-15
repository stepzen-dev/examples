# Overview

If you use Apollo Federation to federate subgraphs, you can use StepZen to build those subgraphs. With little effort, StepZen created and deployed subgraphs are Apollo Federation ready. Let's walk you through how to get it done.

For this example we are federating two subgraphs, both StepZen endpoints, that will be running in your StepZen account.

 - `customers` - provides customer information from a MySQL database
 - `returns` - provides returns locations for businesses from a REST api

Note, both subgraphs contain mocked up data.

We will federate using Apollo Federation so that business' returns locations close to a customer's address can be requested. Managed federation will be used so that the supergraph's definition is maintained in your Apollo account.

In each case the SDL and configuration for the subgraphs has already been setup, each subgraph's `README.md` provides information on how the subgraphs were easily created.

# Running the example

# Setup

We assume that you are familiar with how [Apollo Federation[(https://www.apollographql.com/docs/federation/)] works. We will only cover the basics. We will be doing an Apollo Studio supergraph creation.
  1. [Signup for Apollo Studio](https://studio.apollographql.com/signup?from=%2F&type=prod) 
  1. Create a supergraph in Apollo Studio named `lynx`, you can use any name but we use `lynx` to make it clear when you need to provide the supergraph Graph ID.
  1. [Install rover](https://www.apollographql.com/docs/rover/getting-started/)

We also assume you have [signed up with](https://stepzen.com/signup) StepZen, [installed the StepZen CLI and are already logged into your account](https://stepzen.com/getting-started).

Note all instructions are based starting at the `with-apollo/getting-started`
folder relative to the root of this repository.

## Customers subgraph

Deploy the `customers` subgraph into your StepZen account:

```
(cd customers ; stepzen deploy)
```

This results in a StepZen deployed GraphQL customers endpoint at:
```
https://ACCOUNT.stepzen.net/subgraph/customers/__graphql
```
with `ACCOUNT` replaced by your account.

Introspect and publish the `customers` subgraph into your `lynx` Apollo Federation supergraph.  Copy paste the commands from the 'Update Schema' button
in Apollo Studio for your `lynx` subgraph, and selecting the introspection tab.

You will need to modify:
  - the introspect and `--routing-url` endpoints to be the deployed customers endpoint.
  - the subgraph `-name` to be `customers`

For example, here our `lynx`'s supergraph graph ID is `lynx-n321j` and we have masked our `APOLLO_KEY`:
```
rover subgraph introspect \
  https://ACCOUNT.stepzen.net/subgraph/customers/__graphql | \
  APOLLO_KEY=service:lynx-x321j:xxxxxxxxxxxxxxxxxxxxxx \
  rover subgraph publish lynx-n321j@current \
  --name customers --schema - \
  --routing-url https://ACCOUNT.stepzen.net/subgraph/customers/__graphql
```

`rover subgraph introspect` pulls the subgraph's federation schema from
the deployed `customers` endpoint.

`rover subgraph publish` publishes the definition of the `customers` subgraph
into the `lynx` supergraph's schema.

## Returns subgraph

Now the same steps are repeated for the `returns` subgraph.`

Deploy the `returns` subgraph into your StepZen account:

```
(cd returns ; stepzen start)
```

This results in a StepZen deployed GraphQL `returns` endpoint at:
```
https://ACCOUNT.stepzen.net/subgraph/returns/__graphql
```
with `ACCOUNT` replaced by your account.

Introspect and publish the `returns` subgraph into your Apollo Federation
`lynx` supergraph, following the previous instructions for
`customers` but using `returns` and its deployed endpoint.

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

```
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


```
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

```
type Query {
  returnStores(city: String): [ReturnStoreEntry]
    @rest(endpoint: "https://json2api-returns-p2axj4bzta-uw.a.run.app/returns?q=city+eq+$city")
}
```

StepZen automatically maps the `city` field in `Address` to the `city` argument of `Query.returnStores`.

That's it again! A type is simply extended by this subgraph declaratively by adding fields that reference Query fields the subgraph already provides and indicating the primary key of the type and any external fields needed as arguments.

## Authorization

In this getting-started the StepZen endpoints are configured to be 
open endpoints to simplify the setup for Apollo Federation.

Please follow [with-authorization](../with-authorization/README.md) for instructions
on how to setup protected StepZen endpoint with Apollo Federation.

# Next steps

TODO
