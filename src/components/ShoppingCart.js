import cart from "../cart.svg";
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../utils/hooks/cartContext";


function ShoppingCart() {
  let navigate = useNavigate();
  const cartObject  = useContext(CartContext)
  console.log(cartObject);

  return (
    <div>
      <Link to="/cart"><img src={cart} className="cart" alt="cart" /></Link>
      
      <span>#{cartObject.cart.length}</span>
    </div>
  );
}

export default ShoppingCart;
