import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Skills from "./Pages/Skills/Skills";
import Users from "./Pages/User/Users";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserDetils from "./Pages/User/UserDetils";
import Lebana from "./Pages/Lebana/Lebana";
import Shade from "./Pages/shade/Shade";
import Program from "./Pages/program/Program";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login/>,
    element: <Dashboard />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/skills",
    element: <Skills />,
  },

  {
    path: "/fingerprint-registration",
    element: <Users />,
  },
  {
    path: "/lebana-registration",
    element: <Lebana />,
  },
  {
    path: "/shade-registration",
    element: <Shade />,
  },
  {
    path: "/all-program",
    element: <Program />,
  },

  {
    path: "/user/:id",
    element: <UserDetils />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
