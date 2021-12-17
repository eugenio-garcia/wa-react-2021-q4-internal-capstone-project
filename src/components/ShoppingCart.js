import cart from "../cart.svg";
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../utils/hooks/cartContext";


function ShoppingCart() {
  let navigate = useNavigate();
  const { cartObject, setCartObject} = useContext(CartContext)


  const handleOnClick = (event) => {
    navigate(`/...?q=${event.target.q.value}`)
  };
  return (
    <div>
      <Link to="/cart"><img src={cart} className="cart" alt="cart" /></Link>
      
      <span>#{cartObject.length}</span>
    </div>
  );
}

export default ShoppingCart;
