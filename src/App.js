import "./App.css";
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import Home from "./components/Home"
import Products from "./components/Products"
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (

    <Router>
        <Routes>
          <Route exact path="/" element={<Home showProducts={showProducts} setShowProducts={setShowProducts}/>} />
          <Route exact path="/home" element={<Home showProducts={showProducts} setShowProducts={setShowProducts}/>}>
          </Route>
          <Route path="/products" element={<Products showProducts={showProducts} setShowProducts={setShowProducts}/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
