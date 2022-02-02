# StepZen Example: with-firebase-nextjs-dashboard

## Introduction

This project builds a GraphQL API with Firebase connected to your NextJS dashboard, using StepZen.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd with-firebase-nextjs-dashboard
```

To install Expo:

```bash
npm install -g expo-cli
```

Then:

```bash
cd stepzen
stepzen start
```

Manually add your admin key and uri in the App.tsx. Still working on adding .env variables to the build and development environments:

```jsx
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

Start up the development environment

```bash
npm start
```

Download the expo App on your phone and scan the QR code or open it in your browser

## Run StepZen

Open your terminal and install the StepZen CLI. You need to login here using the command: `stepzen login`.

After you've followed the prompts (you can accept the suggested endpoint name-- in my case it was api/happy-bunny) and installed the CLI, run stepzen start.

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example http://localhost:5001/api/happy-bunny), which you can use to explore the GraphQL API.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
