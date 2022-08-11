# Apollo Router

## 1. Download the Router

Follow step 1 of [Apollo Router quickstart](https://www.apollographql.com/docs/router/quickstart/) to download and run the router.

## 2. Run the Router

Your execution should like look this to run the router against your `lynx` supergraph after downloading the router.

```
APOLLO_KEY='service:lynx-n321j:xxxxxxxxxxxxxxxxxxxxxx' \
APOLLO_GRAPH_REF="lynx-n321j@current" \
./router
```

This results in the supergraph running in the router locally with a GraphQL endpoint of:

```
http://localhost:4000
```

If you encounter errors when executing queries,
you may find it useful to configure the router to
[include subgraph errors](https://www.apollographql.com/docs/router/configuration/subgraph-error-inclusion/).
To enable this within the router, follow the instructions [here](https://www.apollographql.com/docs/router/configuration/subgraph-error-inclusion/#configuration). 




