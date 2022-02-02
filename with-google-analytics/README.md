# StepZen Example: with-google-analytics

## Introduction

This project builds a GraphQL API with Firebase connected to your NextJS dashboard, using StepZen.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd with-google-analytics
```

Run `yarn install` inside `/with-google-analytics` before running `yarn run`.

You'll also need to add a `config.yaml` file inside the `/stepzen` folder with this information:

```yaml
configurationset:
  - configuration:
      name: amplitude_config
      apikey:PUT_KEY_HERE
      secret:PUT_KEY_HERE
```

Your `.env` should look something like:

```
REACT_APP_ANALYTICS_STEPZEN_API_URL=https://your_account.stepzen.net/demo/events/__graphql
REACT_APP_ANALYTICS_STEPZEN_API_KEY=
REACT_APP_REACTGA_ID=UA-XXXXXXX-1
```

## Run StepZen

Open your terminal and install the StepZen CLI. You need to login here using the command: `stepzen login`.

After you've followed the prompts (you can accept the suggested endpoint name-- in my case it was api/happy-bunny) and installed the CLI, run stepzen start.

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example http://localhost:5001/api/happy-bunny), which you can use to explore the GraphQL API.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
