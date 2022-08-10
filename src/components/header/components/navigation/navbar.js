import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";
import Logo from "../navigation/Logo";

const Navbar = () => {
  const pathArray = [
    { pathName: "collections", displayName: "Collections" },
    { pathName: "men", displayName: "Men" },
    { pathName: "women", displayName: "Women" },
    { pathName: "about", displayName: "About" },
    { pathName: "contact", displayName: "Contact" },
    ,
  ];
  return (
    <div class="nav">
      <Logo />
      <nav>
        {pathArray.map((link) => (
          <Link to={link.pathName} key={link.displayName}>
            {link.displayName}
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Navbar;
