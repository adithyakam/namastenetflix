import React, { useRef, useState } from "react";
import { validation } from "./utils/validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { addUser } from "./Components/Redux/userSlice";
import { userProfileimage } from "./utils/constants";

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const [errormsg, seterrormsg] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const unRef = useRef(null);

  const nav = useNavigate();
  const dispatch = useDispatch();

  const validate = (e) => {
    // validation();
    const err = validation(emailRef.current.value, passwordRef.current.value);
    seterrormsg(err);
    if (err) return;

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: unRef.current.value,
            photoURL: userProfileimage,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrormsg(errorCode + ":" + errorMessage);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + ":" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + ":" + errorMessage);
        });
    }
  };

  return (
    <div className="text-white">
      <Header />

      <div>
        <img
          className="w-full h-full "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className="absolute right-0 top-0 bg-gradient-to-b bg-slate-950 bg-opacity-50 w-full h-full"></div>
      <div className="absolute top-0 mx-[40%] mt-[10%] w-96 mx- bg-gradient-to-b bg-black bg-opacity-80 flex flex-col flex-wrap z-10 p-2">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="z-10  flex flex-col flex-wrap p-8 "
        >
          <h1 className="text-2xl font-bold ">
            {isSignin ? " Sign In" : " Sign Up"}
          </h1>

          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="my-4 p-3 text-black rounded-md"
          />

          {!isSignin && (
            <input
              type="text"
              ref={unRef}
              placeholder="username"
              className="my-4 p-3 text-black rounded-md"
            />
          )}
          <input
            ref={passwordRef}
            type="password"
            placeholder="password"
            className="my-4 p-3 text-black rounded-md"
          />

          <button
            onClick={() => validate()}
            className="bg-red-600 my-4 p-3 rounded-md"
          >
            {isSignin ? " Sign In" : " Sign Up"}
          </button>
          {errormsg && <p className="text-red-700">{errormsg}</p>}
          <h3
            className="cursor-pointer"
            onClick={(e) => setisSignin(!isSignin)}
          >
            New to Netflix?{isSignin ? " Sign up now." : " Sign in"}
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
