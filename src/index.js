import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { App } from "./components/App";
import { Router } from "./router";
const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

const router = Router.getRouter();
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);