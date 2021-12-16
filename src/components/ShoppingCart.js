import cart from "../cart.svg";
import React from "react";
import { useNavigate } from "react-router-dom";


function ShoppingCart() {
  let navigate = useNavigate();


  const handleOnClick = (event) => {
    navigate(`/...?q=${event.target.q.value}`)
  };
  return (
    <div>
      
      <img src={cart} className="cart" alt="cart" />
      <span>#{1}</span>
    </div>
  );
}

export default ShoppingCart;
