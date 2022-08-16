import React from "react";

import logoImg from "./assets/logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImg} alt="logo-image" />
    </div>
  );
};

export default Logo;
