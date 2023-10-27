import React from "react";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Footer from "./Footer";
import Login from "./Login";

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <div className="">
        <Header />
        <RouterProvider router={approuter}></RouterProvider>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
