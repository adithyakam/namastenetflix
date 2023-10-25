import React from "react";
import logo from "./assets/logo.svg";

const Header = () => {
  return (
    <div className="absolute p-8 z-20">
      <div>
        <img src={logo} className=" p-2" />
      </div>
    </div>
  );
};

export default Header;
