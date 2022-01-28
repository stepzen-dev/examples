# StepZen Example: `with-sveltekit`

# Introduction

This project builds a GraphQL API that is consumed by a Svelte fronted created with SvelteKit. SvelteKit is a serverless-first Svelte metaframework for building web applications with filesystem-based routing.

# Getting Started

You'll need to create a [StepZen account](https://stepzen.com/signup) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```
git clone https://github.com/stepzen-dev/examples.git
cd with-sveltekit
```

Before you can run this example, you need to have a free DEV.to Communiy API Key, which you can find on [this page](https://dev.to/settings/account). This API Key is used to pull data from DEV.to that will be consumed by the example you're going to built.

You can copy the file `stepzen/example.config.yaml` as `stepzen/config.yaml`:

```bash
mv stepzen/example.config.yaml stepzen/config.yaml
```

And add your DEV.to Community API Key to it:

```yaml
configurationset:
  - configuration:
      name: devto_config
      devto_api_key: xxxx
```

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start). You need to login here using the command: `stepzen login`.

Start the GraphQL by running `stepzen start`. After you've followed the prompts (you can accept the suggested endpoint name or add your own), a proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/happy-buny`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## SvelteKit Setup

Include your StepZen endpoint and API keys in `.env`, by copying then file `.env.example` to `.env`:

```bash
mv .env.example .env
```

And add the endpoint and API Key for Stepzen:

```
STEPZEN_ENDPOINT=
STEPZEN_API_KEY=
```

## Install Dependencies and Start Development Server

Install the dependencies using `npm` or Yarn:

```bash
npm i
npm run dev
```

Open `localhost:3000` to see the project.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questiosn? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
