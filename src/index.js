import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { debugContextDevtool } from "react-context-devtool";

// fake authentication for testing
localStorage.setItem("token", "token");

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);

if(window.__REACT_CONTEXT_DEVTOOL_GLOBAL_HOOK) {
  debugContextDevtool(container, {
    disable: process.env.NODE_ENV === "production",
  });
}

