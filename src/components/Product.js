import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useProduct } from "../utils/hooks/useProduct";
import Header from "../Header.js";
import Footer from "../Footer.js";
import "./Products.css";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

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
  text-align: left;
    width: 80%;
    min-height: 600px;
  `;

  const MainLayer = ({ product }) => {
    console.log(product);

    const bol = typeof product !== "undefined" && product.length > 0;
    if (!bol) return <h1>Loading...</h1>;

    product = product[0];

    const image = product.data.mainimage.url;
    const name = product.data.name;
    const category = product.data.category.slug;
    const price = product.data.price;
    const sku = product.data.sku;
    const description = product.data.description[0].text

    return (
      <DivWrapper>
        <DivSideBar>
          <Swiper navigation={true} className="mySwiper">
            {product.data.images.map((image) => {
              return (<SwiperSlide>
              <img className="product-image" src={image.image.url} alt={name} />
              </SwiperSlide>
              );
            })}

          </Swiper>

          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {product.data.images.map((image) => {
              return (<SwiperSlide>
              <img className="product-image" src={image.image.url} alt={name} />
              </SwiperSlide>
              );
            })}
          </Swiper>
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
          <div>
            SKU:<span style={{ fontWeight: "bold" }}> {sku}</span>
          </div>
          <div>
            Tags:
            <ul>
              {product.tags.map((tag) => {
                return (
                  <li>{tag}</li>
                );
              })}
            </ul>
          </div>
          <div>
            Description:<p style={{ fontWeight: "italic" }}> {description}</p>
          </div>
          <div>
            <input></input>
            <button>Add to Cart</button>
          </div>
          <div>
            <h2>Specs:</h2>
            <table>
              <tr>
                <th>
                  Concept
                </th>
                <th>
                  Value
                </th>
              </tr>
              {product.data.specs.map((spec) => {
                return (
                  <tr>
                    <td>{spec.spec_name}</td>
                    <td>{spec.spec_value}</td>
                  </tr>
                );
              })}
            </table>
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
