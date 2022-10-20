import { React, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

import Logo from "./Logo";
import LoginPanel from "../cart/LoginPanel";

import { pathArray } from "./Navbar";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";

const MobileNav = ({
  itemsInCart,
  setItemsInCart,
  isPopupOpen,
  setIsPopupOpen,
}) => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleNav = () => {
    setIsOpenHamburger(!isOpenHamburger);
    setIsOpenCart(false);
  };

  const handleCart = () => {
    setIsOpenCart(!isOpenCart);
    setIsOpenHamburger(false);
  };

  return (
    <div className="flex w-full justify-between">
      <div onClick={handleNav} className="block md:hidden my-auto">
        {isOpenHamburger ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      <div className="flex justify-between my-auto mx-2">
        <Logo />
      </div>

      <ul
        className={
          isOpenHamburger
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "ease-in-out duration-0 fixed left-[-100%]"
        }
      >
        <div onClick={handleNav} className="block py-6 w-full md:hidden">
          {isOpenHamburger ? (
            <AiOutlineClose size={20} className="mx-auto" />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        {pathArray.map((menu, index) => {
          return (
            <NavLink
              to={menu.pathName}
              key={index}
              className="flex flex-row text-lg mx-4 text-black font-semibold"
            >
              {menu.displayName}
            </NavLink>
          );
        })}
      </ul>

      <div onClick={handleCart} className="block md:hidden">
        {isOpenCart ? (
          <Cart
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
          />
        ) : (
          <Cart
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
          />
        )}
      </div>
    </div>
  );
};

export default MobileNav;
