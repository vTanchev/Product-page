import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Header from "./components/header/header";
import ItemsInCart from "./components/items-in-cart/ItemsInCart";
import Main from "./components/main/main";
import ProductImageGallery from "./components/main/product-images/ProductImageGallery";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="App">
      <ProductImageGallery
        showGallery={showGallery}
        setShowGallery={setShowGallery}
      />
      <Router>
        <Header
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
        />
        <ItemsInCart
          isOpen={isPopupOpen}
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          count={count}
          setCount={setCount}
        />

        <Routes>
          <Route path="/" element={<Navigate to="/women" replace />}></Route>
          <Route path="/collections" element={<p>Collections</p>}></Route>
          <Route path="/men" element={<p>Men</p>}></Route>
          <Route
            path="/women"
            element={
              <Main
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
                count={count}
                setCount={setCount}
                showGallery={showGallery}
                setShowGallery={setShowGallery}
              />
            }
          ></Route>
          <Route path="/about" element={<p>About</p>}></Route>
          <Route path="/contact" element={<p>Contact</p>}></Route>
          <Route path="*" element={<Navigate to="/women" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
