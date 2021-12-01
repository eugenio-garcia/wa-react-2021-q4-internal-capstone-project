import "./App.css";
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import React, {useState} from "react";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="App">
      <Header showProducts={showProducts} setShowProducts={setShowProducts} />
      <Content showProducts={showProducts} setShowProducts={setShowProducts} />
      <Footer />
    </div>
  );
}

export default App;
