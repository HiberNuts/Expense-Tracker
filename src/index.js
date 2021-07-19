import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context/context";
import App from "./App";
import "./index.css";
import { speechProvider } from "@speechly/react-client";

ReactDOM.render(
  <speechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
    <Provider>
      <App />
    </Provider>
  </speechProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
