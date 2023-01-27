# StepZen Example: `with-auth0`

## Introduction

This project builds a GraphQL API connected to Auth0, using the [Authorization Code Flow](https://auth0.com/docs/flows/authorization-code-flow). Which is used for frontend applications.

[Auth0](https://auth0.com/) is a cloud-based identity management platform that provides authentication, authorization, and user management for web, mobile, IoT, and internal applications.

## Getting started​

In this section, we will configure our Auth0 client, so we can easily integrate it into our StepZen GraphQL API.

You need to have an Auth0 account to complete this tutorial. If you don't have an account, you can [sign up for a free Auth0 account](https://auth0.com/signup).\

Perform the following steps to set up your Auth0 client:​

**Create an API**

This API is used to represent your StepZen GraphQL API, and give it access to the Auth0 authorization server.

- Click the **Applications** link in the left navigation pane.
- Click the **APIs`** link in the left navigation pane.
- Click the **+ Create API** button.
- On this page you need to fill out the following fields:​
  - Enter a name in the _Name_ field to help you identify this client. For example: "My StepZen API".
  - For the _Identifier_ field, enter a unique value. For example: "https://my-stepzen-api.com".
- And click the **Create** button.

**Create an Application**

This application is the authorization server that will be used to generate access tokens for your StepZen GraphQL API.

- Go Back to the **Applications** page.
- Click the **+ Create Application** button.
- Fill out the following fields:​
  - Enter a name in the _Name_ field to help you identify this client. For example: "My StepZen App".
  - For application type, select _Single Page Web Applications_ (or _Regular Web Applications_).
- Click the **Create** button.
- Go the **Settings** tab to find the configuration needed to integrate with StepZen:
  - _Domain​_
  - _Client ID​_
  - _Client Secret​_
- Scroll down to the **Allowed Callback URLs** field:
  - Add the following URL: "http://localhost:3000/api/auth/callback"

> Read the Auth0 documentation for more information on how to [set up a Machine to Machine application](https://auth0.com/docs/get-started/auth0-overview/create-applications/machine-to-machine-apps).

Next, we need to set up our StepZen GraphQL API to use the Auth0 authorization server. Copy the file `sample.config.yaml` to `config.yaml` and add the following configuration:

```yaml
# Add the JWKS endpoint
deployment:
  identity:
    jwksendpoint: 'https://YOUR_AUTH0_DOMAIN/.well-known/jwks.json'
```

After adding these details, it's time to run and deploy the StepZen GraphQL API. Run the following command to start the GraphQL API:

```bash
stepzen start
```

In your terminal, you should see the endpoint of the StepZen GraphQL API. Copy this endpoint.

We need to add this value the environment variables of our Next.js app. Rename `.env.sample` file to `.env` and add your Auth0 credentials and the StepZen GraphQL API endpoint to the file:

```bash
AUTH0_SECRET='LONG_RANDOM_VALUE' # A long, secret value used to encrypt the session cookie
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN.auth0.com'
AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_ID'
AUTH0_AUDIENCE='YOUR_AUTH0_CLIENT_ID'

# Your StepZen endpoint
STEPZEN_ENDPOINT='YOUR_STEPZEN_ENDPOINT'
```

> The value for `AUTH0_AUDIENCE` is the identifier you set for your API in Auth0.

## Try it out

Now that we have configured everything, we can try it out. Run the following command to start the Next.js app:

```bash
npm run dev
# or yarn dev
```

Open the app in your browser at `http://localhost:3000`. You should see a login button. Click the button to log in. You will be redirected to the Auth0 login page. Enter your credentials and log in.

On the screen you should see the email address you used to login. This is the email address that was returned by Auth0 after the StepZen GraphQL API verified the JWT that was sent by Auth0.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
