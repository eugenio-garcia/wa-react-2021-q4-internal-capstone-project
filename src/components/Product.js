import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useProduct } from "../utils/hooks/useProduct";
import Header from "../Header.js";
import Footer from "../Footer.js";
import "./Products.css";
import Button from "./Button";

function Product({ showProducts, setShowProducts }) {
  let params = useParams();

  const {
    data: product = {},
    isLoadingProduct,
    errorProduct,
  } = useProduct(params.productId);

  console.log(params.productId);

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
    width: 80%;
    min-height: 300px;
  `;

  const MainLayer = ({ product }) => {
    console.log(product);

    const bol = typeof product !== 'undefined' && product.length > 0;
    if (!bol) return (<h1>Loading...</h1>);

    product = product[0];

    const image = product.data.mainimage.url;
    const name = product.data.name;
    const category = product.data.category.slug;
    const price = product.data.price;

    return (
      <DivWrapper>
        <DivSideBar>
          <img className="product-image" src={image} alt={name} />
        </DivSideBar>
        <DivMain>
          <div>
            Name:<span> {name}</span>
          </div>
          <div>
            Category:<span> {category}</span>
          </div>
          <div>
            Price:<span style={{ color: "green" }}> ${price}</span>
          </div>
        </DivMain>
      </DivWrapper>
    );
  };

  return (
    <div className="App">
      <Header showProducts={showProducts} setShowProducts={setShowProducts} />
      <Button setShowProducts={setShowProducts} showProducts={showProducts} />

      {isLoadingProduct && <h2>Loading...</h2>}
      {errorProduct ? (
        <h2>An error ocurred</h2>
      ) : (
          <MainLayer product={product.results} />
      )}

      <Footer />
    </div>
  );
}

export default Product;
