import * as React from "react";
import * as ReactDOM from "react-dom";
import { Voyager } from "graphql-voyager";
import fetch from "isomorphic-fetch";

class Test extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Voyager
        introspection={this.introspectionProvider}
        displayOptions={{ skipRelay: false, showLeafFields: true }}
      />
    );
  }

  introspectionProvider(query) {
    return fetch(`${process.env.STEPZEN_ENDPOINT}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({ query }),
    }).then((response) => response.json());
  }
}

ReactDOM.render(<Test />, document.getElementById("voyager"));
