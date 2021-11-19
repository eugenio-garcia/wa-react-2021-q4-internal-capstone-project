import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Home from "./components/Home.js";
import Products from "./components/Products";

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

const If = ({ conditional, children }) => {
  if (conditional) return children;
  return null;
};

function Content() {
  const [showProducts, setShowProducts] = React.useState(false);

  return (
    <div className="App-content">
      <If conditional={showProducts}>
        <Products></Products>
      </If>

      <If conditional={!showProducts}>
        <Home />
      </If>

      <ThemeProvider theme={theme}>
        <Button onClick={() => setShowProducts(!showProducts)}>
          {showProducts ? "Home Page" : "View all products"}
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default Content;
