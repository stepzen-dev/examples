# StepZen Example: `with-harperdb`

## Introduction

This project builds a GraphQL API connected to HarperDB using StepZen. [HarperDB](https://harperdb.io) is a modern database that combines SQL and NoSQL over a REST API.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-harperdb
```

Before you can run this example, you need to have a HarperDB instance. Which you can set up in the next section.

## Set up HarperDB

Setting up HarperDB can be done in a few steps. First, you need to create an account, after which you can create and populate a new HarperDB instance.

### Create account and instance

1. Create an account on [HarperDB](https://studio.harperdb.io/sign-up)

2. Create a new HarperDB instance.

![Create HarperDB instance](./assets/setup-harperdb-1.png)

3. Select where you want to host your HarperDB instance. This instance can be hosted by HarperDB (on AWS or Wavelength) or self-hosted on your cloud provider of choice.

![Choose hosting option](./assets/setup-harperdb-2.png)

4. When selecting hosted by HarperDB, you need to choose the specifications for the instance created for you on their cloud provider. You can choose to use the free plan here as well.

![Select instance specs](./assets/setup-harperdb-3.png)

5. Create credentials for the HarperDB instance deployed for you on the selected cloud instance. In this example, we've inserted `demo` for every value.

![Create instance credentials](./assets/setup-harperdb-4.png)

6. After pressing "Instance details" you can confirm the selections from the previous steps.

Your HarperDB instance will get deployed on the cloud provider you previously selected, and it will be available within 5 minutes.

### Populate with data

1. Create a new schema called `demo` for the instance, within this schema you can add tables later. Creating a schema can be done through [HarperDB Studio](https://harperdb.io/docs/harperdb-studio/manage-schemas-browse-data/) or [via the REST API](https://studio.harperdb.io/resources/examples/QuickStart%20Examples/Create%20dev%20Schema).

2. Inside the schema, you should create a new table called `listings`. For this table, you need to set a "hash attribute" or what's called a primary key in most relational databases. This table can again be created with HarperDB Studio or [via the REST API](https://studio.harperdb.io/resources/examples/QuickStart%20Examples/Create%20dog%20Table).

![Create new table](./assets/setup-harperdb-5.png)

3. Insert data into the new table `listings`. You can either use SQL or NoSQL to import data into HarperDB and CSV files for bulk inserts, which we'll be using this time. The CSV file we'll use for this example contains data from Airbnb, which you can get from the website [Inside Airbnb](http://insideairbnb.com/), which offers data extracted from the popular accommodation booking website.

    - Upload CSV via HarperDB Studio. Download the CSV file first from [here](http://data.insideairbnb.com/the-netherlands/north-holland/amsterdam/2021-12-05/data/listings.csv).

    ![Import CSV data](./assets/setup-harperdb-6.png)

    - Import data using the REST API:

    ```bash
    curl --location --request POST 'https://REPLACE_WITH_YOUR_INSTANCE_URL' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Basic REPLACE_WITH_YOUR_AUTH_HEADER \
    --data-raw '{
        "operation": "csv_url_load",
        "schema": "demo",
        "table": "listings",
        "csv_url": "http://data.insideairbnb.com/the-netherlands/north-holland/amsterdam/2021-12-05/data/listings.csv"
    }'
    ```

When Successful, you'll get a message like this `{"message":"Starting job with id 2bd09d70-b62d-1221-b837-17aa96b432f5"}%` stating the import job has started. Depending on the size of the CSV, this might take several minutes to complete.

### Copy credentials

The instance url (without 'https://' and authentication header from HarperDB must be passed to StepZen. You can find these in you [Instance Configuration](https://harperdb.io/docs/harperdb-studio/instance-config/).

You can copy the file `sample.config.yaml` to a new `config.yaml` file:

```bash
cp stepzen/sample.config.yaml stepzen/config.yaml
```

Replace the contents of `config.yaml` with your own instance configuration:

```yaml
# stepzen/config.yaml

configurationset:
  - configuration:
      name: harperdbcloud_config
      instanceUrl: REPLACE_WITH_YOUR_INSTANCE_URL (without https://)
      authHeader: REPLACE_WITH_YOUR_AUTH_HEADER
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
stepzen start
```

A proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-harperdb`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.