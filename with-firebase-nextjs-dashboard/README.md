# StepZen Example: with-firebase-nextjs-dashboard

## Introduction

This project builds a GraphQL API with Firebase connected to your NextJS dashboard, using StepZen.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

`git clone https://github.com/stepzen-dev/examples.git`

`cd with-firebase-nextjs-dashboard`

Make sure your `nextjs.config.js` includes these values:

```javascript
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "PLACE_YOUR_KEY_HERE",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "PLACE_YOUR_AUTH_DOMAIN_HERE",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "PLACE_YOUR_PROJECT_ID_HERE",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "PLACE_YOUR_STORAGE_BUCKET_HERE",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "PLACE_YOUR_SENDER_ID_HERE",
    NEXT_PUBLIC_FIREBASE_APP_ID: "PLACE_YOUR_APP_ID_HERE",
    NEXT_PUBLIC_MEASUREMENTID: "PLACE_YOUR_MEASUREMENTID_HERE",
  },
};
```

Run `npm install` inside `/with-firebase-nextjs-dashboard` before running `npm start`.

## Run StepZen

Open your terminal and install the StepZen CLI. You need to login here using the command: `stepzen login`.

After you've followed the prompts (you can accept the suggested endpoint name-- in my case it was api/happy-bunny) and installed the CLI, run stepzen start.

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example http://localhost:5001/api/happy-bunny), which you can use to explore the GraphQL API.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.

To watch @samuelghill demo a challenge with this repo, view:

https://www.youtube.com/watch?v=QcoMqivQ3wk
