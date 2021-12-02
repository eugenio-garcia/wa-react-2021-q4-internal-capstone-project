import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Home from "./components/Home.js";
import Products from "./components/Products";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


// Define our `fg` and `bg` on the theme
const theme = {
  fg: "#00004f",
  bg: "white",
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

function Content({ showProducts, setShowProducts }) {
  return (
    <div className="App-content">
      <ThemeProvider theme={theme}>
        <Button onClick={() => setShowProducts(!showProducts)}>
          {showProducts ? "Home Page" : "View all products"}
        </Button>
      </ThemeProvider>

      {/* {showProducts && <Products />}

      {!showProducts && <Home />} */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />}>
          </Route>
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>

    </div>
  );
}

export default Content;
