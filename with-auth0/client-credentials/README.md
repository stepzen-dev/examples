# StepZen Example: `with-auth0`

## Introduction

This project builds a GraphQL API connected to Auth0, using the [Client Credentials Flow](https://auth0.com/docs/flows/concepts/client-credentials). Which is used for machine-to-machine communication.

[Auth0](https://auth0.com/) is a cloud-based identity management platform that provides authentication, authorization, and user management for web, mobile, IoT, and internal applications.

## Getting Started

​In this section, we will configure our Auth0 client, so we can easily integrate it into our StepZen GraphQL API.

You need to have an Auth0 account to complete this tutorial. If you don't have an account, you can [sign up for a free Auth0 account](https://auth0.com/signup).\

Perform the following steps to set up your Auth0 client:​

**Create an API**

This API is used to represent your StepZen GraphQL API, and give it access to the Auth0 authorization server.

- Log in to Auth0 dashboard.
- Click the **Applications** link in the left navigation pane.
- Click the **APIs`** link in the left navigation pane.
- Click the **+ Create API** button.
- Fill out the API fields:​
  - Enter a name in the Name field to help you identify this client. For example: _My StepZen API_.
  - For the _Identifier_ field, enter a unique value. For example: `https://my-stepzen-api.com`

**Create a Machine to Machine Application**

This application is the authorization server that will be used to generate access tokens for your StepZen GraphQL API.

- Go Back to the **Applications** page.
- Click the **+ Create Application** button.
- Fill out the Application fields:​
  - Enter a name in the Name field to help you identify this client. For example: _My StepZen App_.
  - For application type, select _Machine to Machine Applications_
- Click the **Create** button.
- Go the Settings tab to find the configuration needed to integrate with StepZen.​
  - _Domain​_
  - _Client ID​_
  - _Client Secret​_
- Go to the API tab to authorize the API we created earlier.​

> Read the Auth0 documentation for more information on how to [set up a Machine to Machine application](https://auth0.com/docs/get-started/auth0-overview/create-applications/machine-to-machine-apps).

Next, we need to set up our StepZen GraphQL API to use the Auth0 authorization server. Copy the file `sample.config.yaml` to `config.yaml` and add the following configuration:

```yaml
# Add the JWKS endpoint
deployment:
  identity:
    jwksendpoint: 'https://YOUR_AUTH0_DOMAIN/.well-known/jwks.json'

# Add the authorization server configuration
configurationset:
  - configuration:
      name: auth
      client_id: YOUR_CLIENT_ID
      client_secret: YOUR_CLIENT_SECRET
      audience: YOUR_AUDIENCE # This is the Identifier from the API you created
```

Also, go into the `api.graphql` file and add your Auth0 domain to the `Query` type:

```graphql
type Query {
  token: Token
    @rest(
      method: POST
      endpoint: "https://YOUR_AUTH0_DOMAIN/oauth/token"
      # ...
    )
}
```

## Try it out

Now that we have configured our StepZen GraphQL API, we can try it out. Run the following command to start the GraphQL API:

```bash
stepzen start
```

Using the endpoint in the terminal or the StepZen Explorer in the dashboard, run the following query to generate an access token:

```graphql
query {
  token {
    access_token
  }
}
```

You can use this access token to make requests to the `me` query, or decrypt the token on [JWT.io](https://jwt.io) to see the claims.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
