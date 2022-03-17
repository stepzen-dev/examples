# StepZen Example: `with-mongodb-atlas` 

## Introduction

This project builds a GraphQL API using the [MongoDB Atlas Data API](https://docs.atlas.mongodb.com/api/data-api/?utm_campaign=stepzen&utm_source=stepzen&utm_medium=website&utm_term=partner) without writing any code.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/signup) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-mongodb-atlas
```

Before you can run this example, you need to have a MongoDB Atlas account. 

## Set up MongoDB

Follow the getting started documentation [here](https://docs.atlas.mongodb.com/?utm_campaign=stepzen&utm_source=stepzen&utm_medium=website&utm_term=partner) to create an account and deploy a free cluster. Then, follow the instructions on the [sample data page](https://docs.atlas.mongodb.com/sample-data/?utm_campaign=stepzen&utm_source=stepzen&utm_medium=website&utm_term=partner) to load the cluster with some sample datasets.

Once you have loaded the sample data, you need to create an API Key to use the Data API. In your MongoDB Atlas [console](https://cloud.mongodb.com/v2), click on **Data API** in the left hand nav, and click the **Create API Key** button. Copy and save your API Key, you will need it in the next step. Also copy the URL Endpoint, which will look like `https://data.mongodb-api.com/app/<app-id>/endpoint/data/beta`. You will also need the app-id portion of that URL in the next step. 

Open and edit the `./config.yaml` file, where you need to replace the value `REPLACE_WITH_YOUR_DATA_API_KEY` with the key you just created and copied, and `REPLACE_WITH_YOUR_DATA_API_APP_ID` with the Data API App ID, which should look something like `data-xqgfu` (yours will be different!). 

```yaml
# config.yaml

configurationset:
  - configuration:
      name: mongodb
      apikey: REPLACE_WITH_YOUR_DATA_API_KEY
      appid: data-REPLACE_WITH_YOUR_DATA_API_APP_ID
```

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start). You need to login here using the command: `stepzen login`.

Start the GraphQL by running `stepzen start`. After you've followed the prompts (you can accept the suggested endpoint name or add your own), a proxy of the GraphiQL playground becomes available at `http://localhost/5001` which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Run a query

Try running the following query against your MongoDB Data API:

```graphql
query MyQuery($filter: MongoFilter) {
  listings(limit: 100, filter: $filter) {
    name
    beds
    bedrooms
    address {
      market
    }
    property_type
  }
}
```

with variables:

```json
{
  "filter": {
    "address.market": "Istanbul"
  }
}
```

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
