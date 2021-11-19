import "./App.css";
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import React from "react";

function App() {
  const [showProducts, setShowProducts] = React.useState(false);

  return (
    <div className="App">
      <Header showProducts={showProducts} setShowProducts={setShowProducts} />
      <Content showProducts={showProducts} setShowProducts={setShowProducts} />
      <Footer />
    </div>
  );
}

export default App;
