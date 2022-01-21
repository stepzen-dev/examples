const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const root = require("./build/helpers").root;

module.exports = {
  devtool: "cheap-source-map",

  performance: {
    hints: false,
  },
  devServer: {
    contentBase: root(""),
    watchContentBase: true,
    port: 9000,
    stats: "errors-only",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json", ".css", ".svg"],
    alias: {
      // fix "duplicated react" issue when using npm link
      react: require.resolve("react"),
    },
  },
  entry: ["./index.jsx"],
  output: {
    path: root("src/webpack-example/dist"),
    filename: "main.js",
    sourceMapFilename: "[file].map",
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/env", "@babel/react"],
        },
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new Dotenv({
      path: "./.env", // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new CopyWebpackPlugin([
      { from: "./node_modules/graphql-voyager/dist/voyager.worker.js" },
    ]),
  ],
};
