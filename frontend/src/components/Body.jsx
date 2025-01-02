import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Body;
