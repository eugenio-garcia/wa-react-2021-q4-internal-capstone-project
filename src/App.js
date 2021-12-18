import "./App.css";
import Home from "./components/Home"
import Products from "./components/Products"
import Product from "./components/Product"
import Search from "./components/Search"
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper";
import { CartContext } from "./utils/hooks/cartContext"
import ShoppingCartPage from "./components/ShoppingCartPage";



function App() {
  const [showProducts, setShowProducts] = useState(false);
  const cartObjectInitial =  {
    cart: [],
    addProductToCart: addProductToCart,
    removeProduct: removeProduct,
    editProductToCart:editProductToCart
  }
  const [cartObject, setCartObject] = useState(cartObjectInitial);

  return (
    <CartContext.Provider value={cartObject} >
    <Router>
        <Routes>
          <Route exact path="/" element={<Home showProducts={showProducts} setShowProducts={setShowProducts}/>} />
          <Route exact path="/home" element={<Home showProducts={showProducts} setShowProducts={setShowProducts}/>}>
          </Route>
          <Route path="/products" element={<Products showProducts={showProducts} setShowProducts={setShowProducts}/>} />
          <Route path="/product/:productId" element={<Product showProducts={showProducts} setShowProducts={setShowProducts}/>} />
          <Route path="/search" element={<Search showProducts={showProducts} setShowProducts={setShowProducts}/>} />
          <Route path="/cart" element={<ShoppingCartPage showProducts={showProducts} setShowProducts={setShowProducts}/>} />


        </Routes>
      </Router>
    </CartContext.Provider>
  );

  function addProductToCart(product, quantity){
      console.log("addProductToCart");
      console.log(product);
      console.log(quantity);
      const cartItem = {id: product.id ,product:product, qty: parseInt(quantity)};
      const cart = cartObject.cart;
      
      console.log(cart);
      if(quantity < product.data.stock){
        const filteredCart = cart.filter(i =>{
          return i.id === product.id;
        });

        if(filteredCart.length>0) {
          const pos = cart.map(i => { return i.id; }).indexOf(product.id);//not sure about id
          cart[pos].qty += parseInt(quantity);

        }else{
          cart.push(cartItem)
        }
        
        setCartObject({cart:cart, ...cartObject});
      } else{
        alert("Error, not enough stock")
      }
  }

  function editProductToCart(product, quantity){
    console.log("editProductToCart");
    console.log(product);
    console.log(quantity);
    const cartItem = {id: product.id ,product:product, qty: parseInt(quantity)};
    const cart = cartObject.cart;
    
    console.log(cart);
    if(quantity < product.data.stock){
      const filteredCart = cart.filter(i =>{
        return i.id === product.id;
      });

      if(filteredCart.length>0) {
        const pos = cart.map(i => { return i.id; }).indexOf(product.id);//not sure about id
        cart[pos].qty = parseInt(quantity);

      }else{
        cart.push(cartItem)
      }
      
      setCartObject({cart:cart, ...cartObject});
    } else{
      alert("Error, not enough stock")
    }
}

  function removeProduct(index){
    const cart = cartObject.cart;
    
    cart.splice(index,1);
    setCartObject({cart:cart, ...cartObject});
  }
}

export default App;
