# StepZen Example: with-airtable-prismjs-axios

## Introduction

This project builds a GraphQL API connected to Airtable and PrismJS, using StepZen and axios.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd with-airtable-prismjs-axios
```

## Stickers Page

Demo Link -- https://www.youtube.com/watch?v=2xTqzzb2iaA

To run the development version:

```bash
npm install
cp .env.sample .env.local
npm run dev
```

The stickers url: <http://localhost:3000/stickers>

To build and run the production version:

```bash
npm install
npm run build
npm start -p 3000
```

Both will run at <http://localhost:3000>

## Run StepZen

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

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example http://localhost:5001/api/with-airtable-prismjs-axios), which you can use to explore the GraphQL API.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.