import React, { useState } from "react";

const Login = () => {
  const [isSignin, setisSignin] = useState(true);

  return (
    <div className="text-white">
      <div>
        <img
          className="w-full h-full "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className="absolute right-0 top-0 bg-gradient-to-b bg-slate-950 bg-opacity-50 w-full h-full"></div>
      <div className="absolute top-0 mx-[40%] mt-[10%] w-96 mx- bg-gradient-to-b bg-black bg-opacity-80 flex flex-col flex-wrap z-10 p-2">
        <form className="z-10 flex flex-col flex-wrap p-8 ">
          <h1 className="text-lg font-bold ">
            {isSignin ? " Sign In" : " Sign Up"}
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="my-4 p-3 rounded-md"
          />

          {!isSignin && (
            <input
              type="text"
              placeholder="username"
              className="my-4 p-3 rounded-md"
            />
          )}
          <input
            type="password"
            placeholder="password"
            className="my-4 p-3 rounded-md"
          />

          <button className="bg-red-600 my-4 p-3 rounded-md">
            {isSignin ? " Sign In" : " Sign Up"}
          </button>
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
