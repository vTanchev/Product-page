import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import ItemsInCart from "./components/items-in-cart/ItemsInCart";
import Main from "./components/main/main";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
        />
        <ItemsInCart isOpen={isPopupOpen} itemsInCart={itemsInCart} />
        <Routes>
          <Route path="/" element={<p>Home</p>}></Route>
          <Route path="/collections" element={<p>Collections</p>}></Route>
          <Route path="/men" element={<p>Men</p>}></Route>
          <Route
            path="/women"
            element={
              <Main itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
            }
          ></Route>
          <Route path="/about" element={<p>About</p>}></Route>
          <Route path="/contact" element={<p>Contact</p>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
