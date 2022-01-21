<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.stepzen.com">
    <img alt="StepZen" src="https://stepzen.com/images/logo-white.svg" width="160" />
  </a>
</p>
<h1 align="center">
  Gatsby Visualization Starter
</h1>
<p align="center">
  A starter with Gatsby and GraphQL Voyager prebuilt for StepZen endpoint configurations.
</p>

## 🚀 Quick start

1.  **Create the StepZen Endpoint.**

    Installing and using the StepZen CLI to spin up the GraphQL endpoint.

    ```shell
    # Install StepZen CLI
    $ npm install -g stepzen
    # In the stepzen folder, run...
    $ stepzen start
    ```

    Open http://localhost:5000/foo/bar to view the HelloWorld data.

2.  **Creating the Gatsby Site.**

    Navigate into your root folder.

    ```shell
    $ cd ..
    $ npm or yarn install
    ```

    ```
    $ cp .env.example .env
    // paste your account key and endpoint from StepZen start into .env
    $ yarn or npm start
    ```

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

3.  **Visualizing the StepZen Endpoint**

    Navigate into your explorer file and open up a new terminal.

    ```shell
    $ cd ..
    $ npm or yarn install
    ```

    ```
    $ cp .env.example .env
    // paste your account key and endpoint from StepZen start into .env
    $ yarn or npm start
    ```

    Open http://localhost:9000 to view the visualization of your data.

    ![GraphQL Voyager](https://raw.githubusercontent.com/APIs-guru/graphql-voyager/master/docs/demo-gif.gif)

    Now there are three different development environments running locally on your computer! Every update to the StepZen data in the `./stepzen` root folder will now update in real time for all local environments.

    1. The StepZen endpoint at `http://localhost:5000/foo/bar`
    2. The Gatsby Site at `http://localhost:8000`
    3. The GraphQL Voyager at `http://localhost:9000`
