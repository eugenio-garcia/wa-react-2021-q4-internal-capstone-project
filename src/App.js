import "./App.css";
import Home from "./components/Home"
import Products from "./components/Products"
import Product from "./components/Product"
import Search from "./components/Search"
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper";



function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (

    <Router>
        <Routes>
          <Route exact path="/" element={<Home showProducts={showProducts} setShowProducts={setShowProducts}/>} />
          <Route exact path="/home" element={<Home showProducts={showProducts} setShowProducts={setShowProducts}/>}>
          </Route>
          <Route path="/products" element={<Products showProducts={showProducts} setShowProducts={setShowProducts}/>} />
          <Route path="/product/:productId" element={<Product showProducts={showProducts} setShowProducts={setShowProducts}/>} />
          <Route path="/search" element={<Search showProducts={showProducts} setShowProducts={setShowProducts}/>} />

        </Routes>
      </Router>
    
  );
}

export default App;
