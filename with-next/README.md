# StepZen Example: `with-next`

## Introduction

This project builds a NextJS app that consumes a GraphQL API selected from the [StepZen GraphQL Studio](https://graphql.stepzen.com/).

## Getting Started

You'll need to create a [StepZen account](https://stepzen.com/signup) first.

Alternatively, you can login using `stepzen login --public` without signing up, but note that your API will be publicly accessible. 

Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:



```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-next
yarn dev
```

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start). You need to login here using the command: `stepzen login`.

Start the GraphQL API by running `stepzen start`. After you've followed the prompts (you can accept the suggested endpoint name or add your own), a proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/with-next`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Adding environment variables

You might need to use variables such as keys in your API. You can add them in the `.env` file like so:

```
NEXT_API_KEY=apikeyvaluehere
```

You'd then send the key in your graphql request in `pages/index.js` like this, in the `graphql` variable (I've removed the query body for brevity):

```
var graphql = JSON.stringify({
    query: "query spacexdataQuery($id: String){\n    spacexdataQuery(id: $id){query_here}}",
    variables: {id: "5eb87d42ffd86e000604b384"},
    headers: {"Authorization": process.env.NEXT_API_KEY}
})
```

Your request is secure since it's kept off the client with [NextJS  Server Side Rendering](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props). 

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
