# StepZen Example: `with-react-native`

## Introduction

This project builds a GraphQL API with Firebase connected to your NextJS dashboard, using StepZen.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-react-native
```

To install Expo:

```bash
npm install -g expo-cli
```

Manually add your admin key and uri in the App.tsx. Still working on adding `.env` variables to the build and development environments:

```jsx
// App.tsx

const client = new ApolloClient({
	link: createHttpLink({
		credentials: "same-origin",
		headers: {
			Authorization: `Apikey {add_key}`,
		},
		uri: "{add_uri}",
	}),
	cache: new InMemoryCache(),
});
```

## Install Dependencies and Start Development Server

Install the dependencies:

```bash
npm i
npm start
```

Download the expo App on your phone and scan the QR code or open it in your browser

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start):

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

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example `http://localhost:5001/api/with-react-native`), which you can use to explore the GraphQL API.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
