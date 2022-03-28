# sz-interface-filter

As of 2022-03-16 this is an example showing how to limit the queries executed using StepZen when using multiple queries that supply the same interface. Be sure to check the latest [StepZen](https://stepzen.com) docs.

This example defines an "echo" interface for the data returned by two services, httpbin's echo service and postman's echo service. You can call those services directly using the httpbin and postman queries in the schema. 

The "echo" query that's defined takes a "provider" parameter. There are two queries that supply the "echo" query, httpbinIQ and postmanIQ. Those two queries are sequence queries. The first step in the sequence (filterHttpbin or filterPostman) will only return rows if the provider parameter matches the name of the service, and the second step is either the httpbin or postman query.

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
results in 
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