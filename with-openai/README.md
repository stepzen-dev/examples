# StepZen Example: `with-openai`

## Introduction

This project shows how to create a GraphQL API connected for OpenAI using StepZen. We will use the `@rest` directive to generate our GraphQL schema. You can refer to the documentation [here](https://www.openai.com/en/api/documentation)

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-openai
```

You also need an OpenAI account and an API key. You can get one from the [OpenAPI web site](https://beta.openai.com/account/api-keys). Once you have it, please create a `.env` file and save it there:

```bash
echo "STEPZEN_OPENAI_API_KEY=sk-s6-yourkey-yourkey-yourkey-H3" > .env
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

A proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-openai`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation for REST](https://stepzen.com/docs/connecting-backends/how-to-connect-a-rest-service). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
