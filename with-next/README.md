# StepZen Example: with-next

## Introduction

This project is a GraphQL API connected to StepZen within the Next framework.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd with-next
```

Run `npm install` inside `/with-next` before running `npm run dev.

## Run StepZen

Open your terminal and install the StepZen CLI. You need to login here using the command: `stepzen login`.

After you've followed the prompts (you can accept the suggested endpoint name-- in my case it was api/happy-bunny) and installed the CLI, run stepzen start.

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example http://localhost:5001/api/happy-bunny), which you can use to explore the GraphQL API.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
