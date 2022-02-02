# StepZen Example: with-gatsby

## Introduction

This is a demonstration of how to build a login screen for a mobile app built using Reaact Native with Google Sign-In, FaunaDB, and StepZen. If you'd like to see a live-code demo video looking at the project covered in this blog posts, [check it out on YouTube](https://www.youtube.com/watch?v=8nzJdgrZ7FQ).

## Getting Set Up

Let's get you set up with the accounts and tools you'll need to build this project.

### Setting Up StepZen

Create a [StepZen account](https://stepzen.com/request-invite) first, in order to get your API and admin keys (click the ["My Account"](https://stepzen.com/account) button on the top right once you log in to see where they are).

Next, you'll need the StepZen CLI in order to deploy and test your StepZen GraphQL endpoint. To install the CLI, follow the [instructions in the docs](https://stepzen.com/docs/quick-start).

### Setting up the Expo React Native App

```bash
npm install --global expo-cli
```

Initialize the new app. When prompted, select `tabs (TypeScript), several example screens and tabs using react-navigation and TypeScript`. This will install many dependencies that are designed to improve the React Native navigation experience.

We'll need to

```bash
expo init faunadb-login-demo
cd faunadb-login-demo
```

### Set Up a Fauna Database

Go to [Fauna.com](https://fauna.com) and click Sign Up. You will be taken to the Fauna dashboard.

Create a new database in Fauna named `stepzen-fauna`. Use the "Classic" region group and be sure to check the "Use demo data" option.

Once the database is created, open the [GraphQL](https://dashboard.fauna.com/graphql/@db/global/stepzen-fauna) menu option within the Fauna Dashboard. You'll need the HTTP authorization header at the bottom of the Playground to use in your `config.yaml` file.

![HTTP Headers](/images/blog/85rtr7kmp97zyiee9a0o.png)

The schema below defines the user information we plan to store in Fauna. Copy the schema and save it as a `.graphql` file. Upload the file to the Fauna GraphQL Playground by selecting Merge Schema. This will allow us to write the users that log in to our application to the FaunaDB User Collection.

```graphql
type User {
  email: String!
  familyName: String!
  givenName: String!
  id: String!
  name: String!
  photoUrl: String!
}

input UserInput {
  email: String!
  familyName: String!
  givenName: String!
  id: String!
  name: String!
  photoUrl: String!
}

type MutationUser {
  createUser(data: UserInput!): User!
}

type QueryUser {
  findUserByID(id: ID!): User
}
```

On your local machine, go to the root of your `faunadb-login-demo` project and create a StepZen folder.

```bash
mkdir stepzen && cd stepzen
```

Create a `config.yaml` file in the folder with the following contents (replacing `Basic MY_FAUNA_KEY` with the information you copied from the GraphQL Playground in the Fauna dashboard).

```yaml
configurationset:
  - configuration:
      name: fauna_config
      Authorization: Basic MY_FAUNA_KEY
```

Now that we're done with the setup, we need to create our GraphQL schema code that builds our API within StepZen.

## Creating Google Sign-In Client IDs

First, create a Google Cloud account. There are free trials available.

Once created, go to "Credentials" in the Google Cloud dashboard and create two oAuth clientIds for Android and iOS applications by clicking "Create Credentials" and then "OAuth client ID". Copy and save these. We'll need then when we are creating the React Native app and we install the dependency `expo-google-app-auth`.

Using the StepZen CLI, run the following command.

```bash
stepzen start
```

The CLI will suggest a name for the endpoint (in the format `FOLDER_NAME/ENDPOINT_NAME`) but we can specify any name we want. Let's use `demo/native-login`. Note that the CLI will generate a file, `stepzen.config.json`, that tells StepZen the name the API endpoint so that it can skip this step on subsequent requests.

The CLI will spin up a local environment on `localhost:5000` with our endpoint now deployed!

```bash
http://localhost:5000/demo/native-login

Deploying to StepZen...... done

Successfully deployed demo/native-login

Your endpoint is available at https://youraccountname.stepzen.net/demo/native-login/__graphql
```

Now run:

```bash
expo start
```

Download the expo app on your phone, and scan the QR code provided at `http://localhost:19002/` on your computer.

Select the "Login with Google" button on the app, and when prompted, login with your Google credentials. On login, you should be redirected to the `UserScreen`, and the FaunaDB User Collection will be updated with the user details!

Here is an example of a user added to FaunaDB.

```javascript
{
  "ref": Ref(Collection("User"), "306547471891300420"),
  "ts": 1628605300720000,
  "data": {
    "familyName": "Hill",
    "name": "Sam Hill",
    "givenName": "Sam",
    "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14Gi3fCa_eM-k0vLZK5z1gChGA0RS_3C-OhyIp8ml=s96-c",
    "email": "sam@stepzen.com",
    "id": "1234"
  }
}
```

Now you successfully have a Google sign-in with a database that can store all the users. This demonstrates the ease of adding a FaunaDB to your single StepZen endpoint that can be combined with any other data source. Writing the data of the user to more than one database or API can easily be added to this configuration in the StepZen schema.

## Learn More

To learn more on how to use FaunaDB and mutations, check out [our GraphQL mutation docs](https://stepzen.com/docs/using-graphql/graphql-mutation-basics).

The StepZen docs also hold information on connecting other backends to your endpoint like [REST APIs](https://stepzen.com/docs/connecting-backends/how-to-connect-a-rest-service) and [databases like PostGresQL](https://stepzen.com/docs/connecting-backends/how-to-connect-a-postgresql-database).

If you've got more questions, [hit us up on Discord](https://discord.com/channels/768229795544170506/768229795544170509), we'd love to chat.
