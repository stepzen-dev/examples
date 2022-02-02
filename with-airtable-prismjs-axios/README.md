# StepZen Example: with-airtable-prismjs-axios

## Introduction

This project builds a GraphQL API connected to Airtable and PrismJS, using StepZen and axios.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

`git clone https://github.com/stepzen-dev/examples.git`

`cd with-airtable-prismjs-axios`

## Stickers Page

Demo Link -- https://www.youtube.com/watch?v=2xTqzzb2iaA

To run the development version:

- `npm install`
- `cp .env.sample .env.local`
- `npm run dev`

The stickers url: <http://localhost:3000/stickers>

To build and run the production version:

- `npm install`
- `npm run build`
- `npm start -p 3000`

Both will run at <http://localhost:3000>

## Run StepZen

Open your terminal and install the StepZen CLI. You need to login here using the command: `stepzen login`.

Your `config.yaml` file inside the `./stepzen` folder will need to look like:

```yaml
configurationset:
  - configuration:
      name: airtable_config
      Authorization: Bearer PLACE_KEY_HERE
      baseid: PLACE_ID_HERE
  - configuration:
      name: lob_test_config
      Authorization: Basic PLACE_KEY_HERE
  - configuration:
      name: lob_dummy_live_config
      Authorization: Basic PLACE_KEY_HERE
```

After you've followed the prompts (you can accept the suggested endpoint name-- in my case it was api/happy-bunny) and installed the CLI, run stepzen start.

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example http://localhost:5001/api/happy-bunny), which you can use to explore the GraphQL API.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.

To watch @samuelghill demo a challenge with this repo, view:

https://www.youtube.com/watch?v=QcoMqivQ3wk
