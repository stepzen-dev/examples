# StepZen Example: `with-mysql`

# Introduction

This project builds a GraphQL API connected to your MySQL database. StepZen's custom @dbquery directive connects to the sample database without need for resolvers on the developer's end.

# Getting Started

You'll need to create a [StepZen account](https://stepzen.com/signup) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory:

```
git clone https://github.com/stepzen-dev/examples/tree/main/with-mysql
cd with-mysql
```

To open up this example's graphiql in the browser, run `stepzen start`. To see how we connected with the database, checkout the `/config.yaml` file. That's where the information that StepZen needs to wire up the connection is located. To learn more about how to configure MySQL connections with StepZen, [see our docs](https://stepzen.com/docs/connecting-backends/how-to-connect-a-mysql-database#connect-to-mysql).

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start). You need to login here using the command: `stepzen login`.

Start the GraphQL by running `stepzen start`. After you've followed the prompts (you can accept the suggested endpoint name or add your own), a proxy of the GraphiQL playground becomes available at `http://localhost/5001` (in example `http://localhost:5001/api/happy-bunny`), which you can use to explore the GraphQL API. Also, the endpoint at which your GraphQL API is deployed gets logged in the terminal. You can query your GraphQL API from any application, browser, or IDE by providing the API Key linked to your account.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.gg/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
