import logo from "./logo.svg";
import magnifier from "./magnifier.svg";
import cart from "./cart.svg";
import React from "react";

function Header({setShowProducts}) {
  return (
    <header className="App-header">
      <div onClick={() => setShowProducts(false)}>
        <img src={logo} className="App-logo" alt="logo" />
        <span>Food & Furniture</span>
      </div>
      <div>
        <img src={magnifier} className="magnifier" alt="magnifier" />
        <input className="Search-Text" />
      </div>
      <img src={cart} className="cart" alt="cart" />
    </header>
  );
}

export default Header;
