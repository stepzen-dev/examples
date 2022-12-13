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

## Make GraphQL Requests

You can now issue GraphQL requests against your endpoint using your favourite GraphQL client,
the endpoint URL was displayed by `stepzen deploy` and will be of the form:
 * `https://account.stepzen.net/api/snowemp/__graphql`

Here we will use `stepzen request` to make requests.

Execute this command:

```
stepzen request 'query{employee(EMAIL:"wsizeyf@sf_tuts.com"){FIRST_NAME LAST_NAME CITY}}' 
```

This execute this GraphQL query operation to find information about a single employee given an email address:
```graphql
query {employee(EMAIL:"wsizeyf@sf_tuts.com") {
   FIRST_NAME
   LAST_NAME
   CITY
}} 
```
(with `stepzen request` we have compressed the operation to simplify copying the command)

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

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
