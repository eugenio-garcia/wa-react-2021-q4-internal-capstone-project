import logo from "./logo.svg";
import magnifier from "./magnifier.svg";
import cart from "./cart.svg";
import React from "react";
import { useNavigate } from "react-router-dom";


function Header({ setShowProducts }) {
  let navigate = useNavigate();


  const handleOnSubmit = (event) => {
    navigate(`/search?q=${event.target.q.value}`)
  };
  return (
    <header className="App-header">
      <div onClick={() => setShowProducts(false)}>
        <img src={logo} className="App-logo" alt="logo" />
        <span>Food & Furniture</span>
      </div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <button type="submit">
          <img src={magnifier}></img>
          </button>
          <input name="q" className="Search-Text" />
        </form>
      </div>
      <img src={cart} className="cart" alt="cart" />
    </header>
  );
}

export default Header;
