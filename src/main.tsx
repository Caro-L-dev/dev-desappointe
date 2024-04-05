import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { Start } from "./components/start/Start.tsx";
import NotFoundPage from "./routes/notFoundPage/NotFoundPage.tsx";
import { LostPage } from "./routes/lostPage/LostPage.tsx";
import { HttpPage } from "./routes/httpPage/HttpPage.tsx";

import "./index.css";

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
        path: "/:code",
        element: <HttpPage />,
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
