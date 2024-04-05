import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import NotFoundPage from "./notFoundPage/NotFoundPage.tsx";
import { LostPage } from "./routes/lost.tsx";

import "./index.css";
import { Start } from "./components/start/Start.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/lost",
        element: <LostPage />,
      },
      {
        path: "/$http_code",
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
