# StepZen Example: with-google-login-faunadb

## Introduction

This is a demonstration of how to build a login screen for a mobile app built using React Native with Google Sign-In, FaunaDB, and StepZen. If you'd like to see a live-code demo video looking at the project covered in this blog posts, [check it out on YouTube](https://www.youtube.com/watch?v=8nzJdgrZ7FQ).

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-google-login-faunadb
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

Create a `config.yaml` file in the stepzen folder with the following contents (replacing `Basic MY_FAUNA_KEY` with the information you copied from the GraphQL Playground in the Fauna dashboard).

```yaml
# stepzen/config.yaml

configurationset:
  - configuration:
      name: fauna_config
      Authorization: Basic MY_FAUNA_KEY
```

### Set Up Google Sign In

Create a Google Cloud account. There are free trials available.

Once created, go to "Credentials" in the Google Cloud dashboard and create two oAuth clientIds for Android and iOS applications by clicking "Create Credentials" and then "OAuth client ID".

Add these credentials for the `LoginScreen` component.

```javascript
// screens/LoginScreen.tsx

const { type, accessToken, user } : any = await Google.logInAsync({
  iosClientId: `{{ add key }}`,
  androidClientId: `{{ add key }}`,
});
```

## Run StepZen

Open your terminal and install the StepZen CLI. You need to login here using the command: `stepzen login`.

After you've followed the prompts (you can accept the suggested endpoint name-- in my case it was `api/with-google-login-faunadb`) and installed the CLI, run stepzen start.

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example `http://localhost:5001/api/with-google-login-faunadb`), which you can use to explore the GraphQL API.

### Setting up the Expo React Native App

```bash
npm install --global expo-cli
```

React Native applications require serverless functions to handle environment variables. So for this example we are going to add the endpoint and headers directly into the `App.tsx` file.

```javascript
// App.tsx

const client = new ApolloClient({
	link: createHttpLink({
		credentials: "same-origin",
		headers: {
			Authorization: `Apikey {{ stepzen_api_key }}`,
		},
		uri: "{{ stepzen_endpoint }}",
	}),
	cache: new InMemoryCache(),
});
```

Now from the root of the project, run:

```bash
npm install
npm run start
```

Download the expo app on your phone, and scan the QR code provided at `http://localhost:19002/` on your computer.

Select the "Login with Google" button on the app, and when prompted, login with your Google credentials. On login, you should be redirected to the `UserScreen`, and the FaunaDB User Collection will be updated with the user details!

Here is an example of a user added to FaunaDB.

```json
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

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.