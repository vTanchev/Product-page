import React from "react";

import { Link } from "react-router-dom";

import logoImg from "./assets/logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="logo">
        <img src={logoImg} alt="logoImg" />
      </Link>
    </div>
  );
};

export default Logo;
