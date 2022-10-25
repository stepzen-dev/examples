# StepZen Example: with-google-analytics

## Introduction

This project builds a GraphQL API with StepZen and consumes it using Python.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-python
```

## Install Dependencies and Start Development Server

Once you've got your Python virtual environment set up and running, install these dependencies:

```bash
pip3 install requests
pip3 install dotenv import load_dotenv
pip3 install os
```

Your `.env` should look something like:

```
KEY= apikey {{YOUR STEPZEN API KEY HERE}}
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

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example `http://localhost:5001/api/with-python`), which you can use to explore the GraphQL API.

## Run Python

In your virtual environment and inside your `with-python` folder in your terminal, run ` /Users/YOUR_USERNAME_HERE/with-python/env/bin/python /Users/YOUR_USERNAME)HERE/with-python/main.py` to see the data coming back from your GraphQL API.

## Another example - Integrating Weather API 
- Please follow the above steps first of creating the stepzen account and cloning the repo.

1. Create a new file called integration.py in your project's root directory.

2. Import the requests library.

3. Define a function called weather that takes two arguments: a city name and an API key.

4. Make a GET request to the StepZen Weather API using the city name and API key.

5. Parse the response JSON and return the current temperature in the city.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
