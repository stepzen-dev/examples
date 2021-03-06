# StepZen Example: `with-google-analytics`

## Introduction

This project builds a GraphQL API with Firebase connected to your NextJS dashboard, using StepZen.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-google-analytics
```

## Install Dependencies and Start Development Server

Install the dependencies using `npm` or Yarn:

```bash
npm i
npm start
```

You can copy the file `sample.config.yaml` to a new `config.yaml` file:

```bash
cp stepzen/sample.config.yaml stepzen/config.yaml
```

Include your own keys in the newly created `config.yaml` file:

```yaml
# stepzen/config.yaml

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

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example `http://localhost:5001/api/with-google-analytics`), which you can use to explore the GraphQL API.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
