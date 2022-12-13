# StepZen Example: `with-snowflake`

## Introduction

This project builds a GraphQL API connected to your Snowflake warehouse using StepZen.
We will use the `@dbquery` directive to generate our GraphQL schema.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-snowflake
```

Before you can run this example, you need to have create a Snowflake warehouse following
[Snowflake in 20 minutes](https://docs.snowflake.com/en/user-guide/getting-started-tutorial.html).

## Snowflake in 20 minutes

Follow the Snowflake getting started tutorial to create and populate the `EMP_BASIC` table in a warehouse.

 * Snowflake in 20 minutes - https://docs.snowflake.com/en/user-guide/getting-started-tutorial.html

Copy the file `sample.config.yaml` to a new `config.yaml` file:

```bash
cp sample.config.yaml config.yaml
```

Modify the contents of `config.yaml` to replace:

  * `{{username}}` with your Snowflake user name
  * `{{password}}` with your Snowflake password
  * `{{account_identifier}}` with your Snowflake account identifier. The account identifier depends upon your Snowflake account edition. For information, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html).

For example, your `config.yaml` should be similar to (depending on your chosen deployment cloud):

```yaml
# config.yaml

configurationset:
  - configuration:
      name: snowy
      dsn: 'jsmith:mypassword@ac79144.us-central1.gcp/SF_TUTS/PUBLIC?warehouse=SF_TUTS_WH'
```

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
stepzen deploy
```

This creates a fully deployed managed GraphQL endpoint running in the cloud.

## SDL

The full SDL is in `snowemp.graphql`, but here we extract the two `Query` field
definitions that access data from Snowflake. This demonstrates the ease of
the declarative approach to connect to a backend system, in this case a Snowflake warehouse.

First is `Query.employee`, a simple loookup for a single employee from an email address.

```graphql
extend type Query {
  """
  Looks up employee records by `EMAIL` in the Snowflake table `EMP_BASIC`.

  The specific warehouse, database and schema for `EMP_BASIC` is defined
  by a DSN in `config.yaml` in the `snowy` configuration.
  """
  employee(EMAIL: String!): Employee
    @dbquery(type: "snowflake", table: "EMP_BASIC", configuration: "snowy")
}
```

`Query.employees` uses an identical `@dbquery` but since it follows standard
GraphQL pagination and has a `filter` argument StepZen automatically provides
the rich functionality of pagination and filtering.

```graphql
extend type Query {
  """
  pages through employee records from `EMP_BASIC` with optional filtering.
  Standard GraphQL pagination is used, thus executing `Query.employees`
  returns a `EmployeeConnection` that contains standdard paging information
  and the edges that match the filter with their node values and cursor information.

  The specific warehouse, database and schema for `EMP_BASIC` is defined
  by a DSN in `config.yaml` in the `snowy` configuration.
  """
  employees(
    first: Int! = 5
    after: String = ""
    filter: EmployeeFilter
  ): EmployeeConnection
    @dbquery(type: "snowflake", table: "EMP_BASIC", configuration: "snowy")
}
```

Now you can start to execute requests to see the power of StepZen and Snowflake.

## GraphQL Requests

You can now issue GraphQL requests against your endpoint using your favourite GraphQL client,
the endpoint URL was displayed by `stepzen deploy` and will be of the form:
 * `https://account.stepzen.net/api/with-snowflake/__graphql`

Authentication is required (see https://stepzen.com/docs/connecting-frontends/connecting-to-stepzen )

Here we will use `stepzen request` to make requests. `stepzen request` automatically uses
the correct authentication header and determines the endpoint from your account
and the current directory.

Execute this command:

```
stepzen request 'query{employee(EMAIL:"wsizeyf@sf_tuts.com"){FIRST_NAME LAST_NAME CITY}}' 
```

This execute this GraphQL query operation to find information about a single employee given an email address:
```graphql
query
{
  employee(EMAIL:"wsizeyf@sf_tuts.com")
  {
    FIRST_NAME
    LAST_NAME
    CITY
  }
} 
```
(with `stepzen request` we have compressed operations to simplify copying the command)

The response should be:
```json
{
  "data": {
    "employee": {
      "FIRST_NAME": "Wallis",
      "LAST_NAME": "Sizey",
      "CITY": "Taibao"
    }
  }
}
```

We can page through all employees using `Query.employees` and standard GraphQL pagination.
With StepZen using standard pagination allows clients to handle paging through results
consistently regardless of if the backend is a database, REST api or another GraphQL API.

First we show how to page through all employees, starting with the first five:
```
stepzen request 'query{employees(first:5){edges{node{FIRST_NAME LAST_NAME CITY}}pageInfo{endCursor hasNextPage}}}'
```

This executes:
```graphql
query {
  employees(first: 5) {
    edges {
      node {
        FIRST_NAME
        LAST_NAME
        CITY
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
```

The response should be similar to:
```json
{
  "data": {
    "employees": {
      "edges": [
        {
          "node": {
            "FIRST_NAME": "Hollis",
            "LAST_NAME": "Anneslie",
            "CITY": "Aleysk"
          }
        },
        {
          "node": {
            "FIRST_NAME": "Di",
            "LAST_NAME": "McGowran",
            "CITY": "Banjar Bengkelgede"
          }
        },
        {
          "node": {
            "FIRST_NAME": "Ron",
            "LAST_NAME": "Mattys",
            "CITY": "Bayaguana"
          }
        },
        {
          "node": {
            "FIRST_NAME": "Althea",
            "LAST_NAME": "Featherstone",
            "CITY": "Calatrava"
          }
        },
        {
          "node": {
            "FIRST_NAME": "Ivett",
            "LAST_NAME": "Casemore",
            "CITY": "Campina Grande"
          }
        }
      ],
      "pageInfo": {
        "endCursor": "eyJjIjoiTDpRdWVyeTplbXBsb3llZXMiLCJvIjo0fQ==",
        "hasNextPage": true
      }
    }
  }
}
```

Note that `pageInfo` contains information that is used to get the next page, `hasNextPage` indicates
there is more data available. We now take the opaque `endCursor` and use it as the value for after to get the next five employees.
```
stepzen request 'query{employees(after:"eyJjIjoiTDpRdWVyeTplbXBsb3llZXMiLCJvIjo0fQ==",first:5){edges{node{FIRST_NAME LAST_NAME CITY}}pageInfo{endCursor hasNextPage}}}'
```
This has simply added the `after` argument, taken from `endCursor`:

```graphql
query {
  employees(after:"eyJjIjoiTDpRdWVyeTplbXBsb3llZXMiLCJvIjo0fQ==" first: 5) {
  # selection omitted
  }
}
```
As an aside, typically an application would handle pagination using variables, for example an operation like this,
which always uses a page size of five due to the default for `first`. The client then uses the empty string
or no value for `$a` on the first request, and then the value from `endCursor` for each subsequent request.
```graphql
query Employees($a:String)  {
  employees(after:$a) {
  # selection omitted
  }
}
```

Now we can add filtering to our request, here we add a filter to only select employees that
live in a city before "Calatrava" alphabetically.

```
stepzen request 'query{employees(filter:{CITY:{lt:"Calatrava"}}){edges{node{FIRST_NAME LAST_NAME CITY}}pageInfo{endCursor hasNextPage}}}'
```

The request is still paginated, only paging through those requests that match the filter, in this case only three employees
are returned, and you can see `hasNextPage` indicates there are no more employees.

```json
{
  "data": {
    "employees": {
      "edges": [
        {
          "node": {
            "FIRST_NAME": "Hollis",
            "LAST_NAME": "Anneslie",
            "CITY": "Aleysk"
          }
        },
        {
          "node": {
            "FIRST_NAME": "Di",
            "LAST_NAME": "McGowran",
            "CITY": "Banjar Bengkelgede"
          }
        },
        {
          "node": {
            "FIRST_NAME": "Ron",
            "LAST_NAME": "Mattys",
            "CITY": "Bayaguana"
          }
        }
      ],
      "pageInfo": {
        "endCursor": "eyJjIjoiTDpRdWVyeTplbXBsb3llZXMiLCJvIjoyfQ==",
        "hasNextPage": false
      }
    }
  }
}
```

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
