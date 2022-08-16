import React from "react";

import logoImg from "./assets/logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={logoImg} alt="logo-image" />
      </a>
    </div>
  );
};

export default Logo;
