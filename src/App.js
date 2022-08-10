import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<p>Home</p>}></Route>
          <Route path="/collections" element={<p>Collections</p>}></Route>
          <Route path="/men" element={<p>Men</p>}></Route>
          <Route path="/women" element={<Main />}></Route>
          <Route path="/about" element={<p>About</p>}></Route>
          <Route path="/contact" element={<p>Contact</p>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
