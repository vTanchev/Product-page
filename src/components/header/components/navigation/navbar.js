import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";
import Logo from "../navigation/Logo";

const pathArray = [
  { pathName: "collections", displayName: "Collections" },
  { pathName: "men", displayName: "Men" },
  { pathName: "women", displayName: "Women" },
  { pathName: "about", displayName: "About" },
  { pathName: "contact", displayName: "Contact" },
];

const activeStyle = {
  borderBottom: "3px solid hsl(26, 100%, 55%)",
};

const Navbar = () => {
  return (
    <div className="nav">
      <Logo />
      <nav>
        {pathArray.map((link) => (
          <NavLink
            to={link.pathName}
            key={link.displayName}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {link.displayName}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
export default Navbar;
