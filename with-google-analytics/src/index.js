import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AnalyticsProvider } from "./contexts/analytics";

ReactDOM.render(
  <React.StrictMode>
    <AnalyticsProvider>
      <App />
    </AnalyticsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
