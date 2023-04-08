import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProductCategoryView from "../Components/ProductCategory/ProductCategoryView";
import Signin from "../Components/User/SignIn";
import Signup from "../Components/User/SignUp";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "prodcat",
          element: <ProductCategoryView />,
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
