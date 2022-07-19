# StepZen Example: `with-firebase`

## Introduction

This project builds a GraphQL API connected to a Firebase Realtime Database using StepZen. We will use the `@rest` directive to generate our GraphQL schema.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-firebase
```

Before you can run this example, you need to have a Firebase account and an instance of a Firebase Realtime database. You can find more information on creating a Realtime database in Firebase in the [documentation](https://firebase.google.com/docs/database/rest/start).

Seed the Firebase Realtime database with the JSON data in [`init.json`](https://github.com/stepzen-dev/examples/blob/main/with-firebase/init.json), and find your project id in the Firebase console.

You need to add this to the file `./config.yaml` where you need to replace `YOUR_FIREBASE_PROJECT_ID` with (in example) `my-project-ee56g-default-rtdb`:

```yaml
# config.yaml

configurationset:
  - configuration:
      name: firebase_config
      project_id: 'YOUR_FIREBASE_PROJECT_ID'
```

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

A proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-firebase`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation for REST](https://stepzen.com/docs/connecting-backends/how-to-connect-a-rest-service). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
