import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import dependencyInject from "./3_infrastructure/core/dependencyInject";
import { RecoilRoot } from "recoil";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import Get from "./lib/di/get";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

dependencyInject();

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <ApolloProvider client={Get.find<ApolloClient<any>>("Connection")}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </RecoilRoot>
);
