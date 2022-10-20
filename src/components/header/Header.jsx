import React from "react";
import styled from "styled-components";

import Navbar from "./components/navigation/Navbar";

import MobileNav from "./components/navigation/MobileNav";
import Cart from "./components/cart/Cart";

const BrowserView = styled.div`
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const MobileView = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = ({
  itemsInCart,
  setItemsInCart,
  isPopupOpen,
  setIsPopupOpen,
}) => {
  return (
    <>
      <BrowserView>
        <div className="hidden md:flex justify-between max-w-[1140px] mx-auto my-6">
          <Navbar />
          <Cart
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
          />
        </div>
      </BrowserView>

      <MobileView className="text-black flex justify-between my-6 mx-4 text-center">
        <MobileNav
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
        />
      </MobileView>
    </>
  );
};

export default Header;
