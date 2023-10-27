import React, { useEffect } from "react";
import Header from "./Header";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import Footer from "./Footer";
import Login from "./Login";
import Browse from "./Browse";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./Components/Redux/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

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
