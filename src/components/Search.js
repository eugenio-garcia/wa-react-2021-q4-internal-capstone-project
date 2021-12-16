import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useProductSearch } from "../utils/hooks/useProductSearch";
import Header from "../Header.js";
import Footer from "../Footer.js";
import "./Products.css";
import Button from "./Button";
import FeaturedProducts from "./FeaturedProducts";


// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

function Search({ showProducts, setShowProducts }) {
    let query = useQuery();

  const {
    data: products = {},
    isLoadingProducts,
    errorProducts,
  } = useProductSearch(query.get("q"));

  console.log(query.get("q"));

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
  const DivWrapper = styled.div``;

  const DivSideBar = styled.div`
    float: left;
    width: 20%;
  `;

  const DivMain = styled.div`
  text-align: left;
    width: 80%;
    min-height: 600px;
  `;

  const MainLayer = ({ products }) => {
    console.log(products);

    const bol = typeof products !== "undefined" && products.length > 0;
    if (!bol) return <h1>No results</h1>;



    return (
      <DivWrapper>
        <DivSideBar>
        </DivSideBar>
        <DivMain>

            <FeaturedProducts featuredProducts={products} />

          
        </DivMain>
      </DivWrapper>
    );
  };

  return (
    <div className="App">
      <Header showProducts={showProducts} setShowProducts={setShowProducts} />
      <Button setShowProducts={setShowProducts} showProducts={showProducts} />

      {isLoadingProducts && <h2>Loading...</h2>}
      {errorProducts ? (
        <h2>An error ocurred</h2>
      ) : (
        <MainLayer products={products.results} />
      )}

      <Footer />
    </div>
  );
}

export default Search;
