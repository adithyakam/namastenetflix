import React, { useRef } from "react";
import logo from "./assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./Components/Redux/userSlice";
import { auth } from "./utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { togglegptsearch } from "./Components/Redux/gptSlice";
import { appLanguages } from "./utils/appConfig";
import { changeLang } from "./Components/Redux/appConfigSlice";

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
  const languageSel = () => {
    dispatch(changeLang(languageSelector.current.value));
  };
  return (
    <div className="absolute p-10 h-10 z-20 flex justify-between items-center w-full bg-gradient-to-b from-black text-white">
      <div className="">
        <img src={logo} className=" p-2" />
      </div>
      {user && (
        <div className="flex m-1">
          {isGptenabled && (
            <select
              className="bg-red-600 p-2 rounded-lg ml-2"
              onChange={languageSel}
            >
              {appLanguages.map((language) => {
                return (
                  <option ref={languageSelector} key={language.key}>
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

          <img src={`${user.photoURL}`} alt="profile" className="mx-1" />
          <button onClick={() => userSignOut()} className="text-white mx-1">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
