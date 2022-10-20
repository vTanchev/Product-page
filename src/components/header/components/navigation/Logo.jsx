import React from "react";

import { Link } from "react-router-dom";

import logoImg from "../../../../assets/svg/logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="mr-12">
      <Link to="/" className="logo my-auto">
        <img src={logoImg} alt="logoImg" />
      </Link>
    </div>
  );
};

export default Logo;
