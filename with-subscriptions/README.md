# StepZen Example: `with-subscriptions`

## Introduction

This project shows a basic example of subscriptions in StepZen. Any query in StepZen can be converted into a subscription.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-subscriptions
```

## Run the example

First, install StepZen CLI and log in using your StepZen account name and the Admin Key from [dashboard.stepzen.com/account](dashboard.stepzen.com/account).

```bash
npm i -g stepzen
stepzen login
```

Then, create a `.env` file to pass your StepZen credentials to the client app:

```bash
echo "STEPZEN_ACCOUNT=$(stepzen whoami --account)" >> .env.local
echo "STEPZEN_API_KEY=$(stepzen whoami --apikey)" >> .env.local
```

(or copy the `.env.sample` file to `.env` and add your credentials manually)

Finally, install dependencies and start the GraphQL server and client:

```bash
npm i
npm run start:all
```

This command deploys the GraphQL schema in the `stepzen` directory to the StepZen Cloud and the websockets endpoint is `wss://ACCOUNT.stepzen.net/stepzen-subscriptions/api/with-subscriptions/__graphql`, which is used by the client app.

> You can also start the GraphQL server and client separately by running `npm run stepzen` and `npm run start` in separate terminals.

## Alternative: using Docker

First, install StepZen CLI:

```bash
npm i -g stepzen
```

Start a local Docker container running the StepZen services:

```bash
stepzen service start && stepzen login --config ~/.stepzen/stepzen-config.local.yaml`
```

Deploy the GraphQL schema in the `stepzen` directory:

```bash
stepzen deploy
```

This deploys the GraphQL schema to StepZen (on your local machine) and the endpoint is `http://localhost:9000/api/with-subscriptions/__graphql`. However, the URL for web sockets is `ws://localhost:9000/stepzen-subscriptions/api/with-subscriptions/__graphql`.
∂
Then, create a `.env` file to pass your StepZen credentials to the client app:

```bash
echo "STEPZEN_ACCOUNT=$(stepzen whoami --account)" >> .env.local
echo "STEPZEN_API_KEY=$(stepzen whoami --apikey)" >> .env.local
```

(or copy the `.env.sample` file to `.env` and add your credentials manually)

Finally, install dependencies and start the client:

```bash
npm i
npm start
```

You will see the subscription running in your terminal.

## Run a query

The subscription is against a mock REST backend and the Binance REST API (`https://api.binance.us/api/v3/ticker?symbol=ETHBTC`). StepZen does a long polling and pushes back to the client whenever a new value is found.

In the file `client/index.js` the subscription query is defined as:

```js
let query = 'subscription { random { number } }';
```

You can change this value to any query you want to run. For example, you can change it to:

```js
let query =
  'subscription { binance(symbol: "ETHUSD", windowSize: "10m") { priceChange } }';
```

This will subscribe to the `binance` query and will return the `priceChange` field whenever a new value is found.

## Learn More

Because any `Query` field can be exposed as a `Subscription`, you can set up subscription against databases, GraphQL endpoints, or any combination thereof. Try them for yourself.

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://git$
