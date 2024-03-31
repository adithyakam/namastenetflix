import React, { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./Redux/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { togglegptsearch } from "./Redux/gptSlice";
import { appLanguages } from "../utils/appConfig";
import { changeLang, setOtherURL } from "./Redux/appConfigSlice";
import profile from "../assets/profile.svg";

const Header = () => {
  const user = useSelector((state) => state.user);
  const lang = useSelector((state) => state.appconfig.lang);
  const otherurl = useSelector((state) => state.appconfig.otherURL);

  const isGptenabled = useSelector((state) => state.gpt.toggle);

  const [isProfile, setisProfile] = useState(false);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const languageSelector = useRef();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(removeUser());
        nav("/");
      } else {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if (!otherurl) nav("/browse");
        // nav("/browse");
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
    <div className="w-screen md:p-5 lg:p-10 bg-gradient-to-b from-black  text-white flex flex-row   flex-nowrap  absolute h-20 z-20 md:flex md:flex-row justify-between items-center">
      <div className=" justify-start">
        <img
          src={logo}
          className=" w-20 h-20 md:w-auto md:h-auto left-[25%] md:relative z-10 p-2 cursor-pointer"
          onClick={() => {
            dispatch(setOtherURL(false));
            nav("/browse");
          }}
        />
      </div>
      {user && (
        <div className=" pr-5  flex justify-end  -z-10   md:relative md:bg-transparent  md:w-auto md:flex md:flex-row md:m-1">
          {isGptenabled && (
            <select
              className="bg-red-600 text-xs md:text-base h-10 p-1 md:p-2 rounded-lg ml-2"
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
          {!otherurl && (
            <button
              className="bg-yellow-600 text-xs md:text-base h-10 p-1 md:p-2 rounded-lg ml-2"
              onClick={() => dispatch(togglegptsearch())}
            >
              {isGptenabled ? "Home" : "GPTSearch"}
            </button>
          )}
          <div
            className="flex flex-col items-center"
            onMouseOver={() => setisProfile(true)}
            onClick={() => setisProfile(!isProfile)}
            onMouseLeave={() => setisProfile(false)}
          >
            <div>
              <img
                src={profile}
                alt="profile"
                className="w-10 h-10 rounded-full bg-white ml-2"
              />
              {/* <img src={`${user.photoURL}`} alt="profile" className="mx-1" /> */}
            </div>
            {isProfile && (
              <div className=" bg-black absolute top-16 md:top-10 right-4 md:right-0 flex flex-col items-center justify-center rounded-md md:p-2 ">
                <h3 className="hover:bg-slate-800 w-full p-2 mx-auto">
                  Profile
                </h3>
                <button
                  onClick={() => userSignOut()}
                  className="text-white  hover:bg-slate-800 w-full p-2 mx-auto"
                >
                  SignOut
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
