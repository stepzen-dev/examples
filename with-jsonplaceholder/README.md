# StepZen Example: `with-jsonplaceholder`

## Introduction

This project builds a GraphQL API using the free [JSONPlaceholder](https://jsonplaceholder.typicode.com/) REST API, a free fake API for testing and prototyping.

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/signup) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-jsonplaceholder
```

JSONPlaceholder comes with a set of 6 common resources:

- [/posts](https://jsonplaceholder.typicode.com/posts)
- [/comments](https://jsonplaceholder.typicode.com/comments)
- [/albums](https://jsonplaceholder.typicode.com/albums)
- [/photos](https://jsonplaceholder.typicode.com/photos)
- [/todos](https://jsonplaceholder.typicode.com/todos)
- [/users](https://jsonplaceholder.typicode.com/users)

You can use path parameters (`https://jsonplaceholder.typicode.com/posts/[ID]`), query parameters (`https://jsonplaceholder.typicode.com/posts/?userId=[ID]`) and much more... see the [JSONPlaceholder docs](https://jsonplaceholder.typicode.com/guide/) for the full list.

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start). You need to login here using the command: `stepzen login`.

Start the GraphQL by running `stepzen start`. After you've followed the prompts (you can accept the suggested endpoint name or add your own), a proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-jsonplaceholder`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
