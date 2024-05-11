import * as React from "react";
import Index from "./routes/Index";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./Error-page";
import "./index.css";
import EditContact ,{
  action as editAction,
} from "./routes/Edit";

import { action as destroyAction } from "./routes/Destroy";

import Contact , {
  loader as contactLoader,
  action as contactAction,
} from './routes/Contact'

import Root,{
  loader as rootLoader ,
  action as rootAction,
  action,
} from "./routes/Root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage/>,
        children : [
          {
            index: true, element: <Index />
          },
          {
            path: "contacts/:contactId",
            element: <Contact/>,
            loader:contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction ,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
