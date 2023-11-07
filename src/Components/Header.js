import React, { useRef } from "react";
import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./Redux/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { togglegptsearch } from "./Redux/gptSlice";
import { appLanguages } from "../utils/appConfig";
import { changeLang } from "./Redux/appConfigSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const lang = useSelector((state) => state.appconfig.lang);
  const isGptenabled = useSelector((state) => state.gpt.toggle);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const languageSelector = useRef();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        nav("/browse");
      } else {
        dispatch(removeUser());
        nav("/");
      }
    });

    return () => {
      unsub();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        nav("/error");
      });
  };
  const languageSel = (key) => {
    dispatch(changeLang(key));
  };
  return (
    <div className=" bg-gradient-to-b from-black items-center text-white flex flex-col w-full absolute p-10 h-10 z-20 md:flex md:flex-row md:justify-between md:items-center">
      <div className="">
        <img src={logo} className=" p-2" />
      </div>
      {user && (
        <div className="bg-black w-screen flex flex-col md:w-auto md:flex md:flex-row md:m-1">
          {isGptenabled && (
            <select
              className="bg-red-600 m-1 md:mt-0 p-2 rounded-lg ml-2"
              onChange={(e) => languageSel(e.target.value)}
            >
              {appLanguages.map((language) => {
                return (
                  <option
                    ref={languageSelector}
                    key={language.key}
                    value={language.key}
                  >
                    {language.title}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="bg-yellow-600 p-2 rounded-lg ml-2"
            onClick={() => dispatch(togglegptsearch())}
          >
            GPTSearch
          </button>

          <div className="flex items-center justify-center">
            <h3>Profile</h3>
            <img src={`${user.photoURL}`} alt="profile" className="mx-1" />
          </div>
          <button onClick={() => userSignOut()} className="text-white mx-1">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
