# next-auth-dashboard

## StepZen Example: with-firebase-nextjs-dashboard

## Introduction

This project builds a GraphQL API connected to your Postgres database using StepZen. We will use the @dbquery directive to generate our GraphQL schema.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

git clone https://github.com/stepzen-dev/examples.git

cd with-firebase-nextjs-dashboard

Run `npm install` inside `/with-firebase-nextjs-dashboard` before running `npm start`.

## Run StepZen

Open your terminal and install the StepZen CLI. You need to login here using the command: `stepzen login`.

After you've followed the prompts (you can accept the suggested endpoint name-- in my case it was api/happy-bunny) and installed the CLI, run stepzen start.

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example http://localhost:5001/api/happy-bunny), which you can use to explore the GraphQL API.

Learn More
You can learn more in the StepZen documentation. Questions? Head over to Discord or Github Discussions to ask questions.

To watch @samuelghill demo a challenge with this repo, view:

https://www.youtube.com/watch?v=QcoMqivQ3wk
