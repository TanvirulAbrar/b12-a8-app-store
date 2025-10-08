import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, data } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from "./component/Navbar.jsx";
import Root from "./component/Root.jsx";
import Home from "./component/Home.jsx";
import Installation from "./component/Installation.jsx";
import Apps from "./component/Apps.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("data.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("data.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        loader: () => fetch("data.json"),
        Component: Installation,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
