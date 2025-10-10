import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from "./component/Navbar.jsx";
import Root from "./component/Root.jsx";
import Home from "./component/Home.jsx";
import Installation from "./component/Installation.jsx";
import Apps from "./component/Apps.jsx";
import ErrorPage from "./component/ErrorPage.jsx";
import Appdes from "./component/Appdes.jsx";
import Appserror from "./component/Appserror.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: (
      <span className="loading loading-spinner text-primary"></span>
    ),

    children: [
      {
        index: true,

        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/data.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        loader: () => fetch("/data.json"),
        Component: Installation,
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/data.json"),
        // errorElement: <Appserror></Appserror>,
        Component: Appdes,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
