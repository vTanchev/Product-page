import React from "react";
import { Link } from "react-router-dom";

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
    <nav>
      {pathArray.map((link) => (
        <Link to={link.pathName} key={link.displayName}>
          {link.displayName}
        </Link>
      ))}
    </nav>
  );
};
export default Navbar;
