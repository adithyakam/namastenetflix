import React, { Suspense, useEffect } from "react";
import Header from "./Header";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import Footer from "./Footer";
import Login from "../Components/Login";
import Browse from "./Browse";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./Redux/userSlice";
import MovieInfo from "../Components/MovieInfo";
import MoviesByActor from "../Components/MovieActor";
import Shimmer from "../Components/Shimmer";

const Body = () => {
  const dispatch = useDispatch();

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={Shimmer}>
          <Browse />
        </Suspense>
      ),
    },
    {
      path: "/movieinfo/:id",
      element: <MovieInfo />,
    },
    {
      path: "/castmovie/:id",
      element: <MoviesByActor />,
    },
  ]);
  const vid = useSelector((state) => state.nowPlaying.nowPlaying);

  return (
    <div>
      <div className="">
        <RouterProvider router={approuter}></RouterProvider>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
