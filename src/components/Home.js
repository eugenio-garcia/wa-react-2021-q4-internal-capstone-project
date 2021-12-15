import React, { useState } from "react";
import styled from "styled-components";
//import banners from "../data/featured-banners.json";
//import products from "../data/featured-products.json";
import FeaturedProducts from "./FeaturedProducts";
import Categories from "./Categories";
import Header from "../Header.js";
import Footer from "../Footer.js";
import Button from "./Button";
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";
import { useProducts } from "../utils/hooks/useProducts";

const ImageInSlider = styled.img`
  max-height: 100vh;
  width: 100vh;
`;

function Home({ showProducts, setShowProducts }) {
  const [index, setIndex] = React.useState(0);

  const { data: banners = {}, isLoading, error } = useFeaturedBanners();
  const [ 
    {
    data: products = {},
    isLoadingProducts,
    errorProducts
  }, setProducts] = useProducts(16);

  const Image = ({ src }) => {
    return <ImageInSlider className="slider" src={src} />;
  };

  // const images = banners.results.map((obj) => {
  //   return obj.data.main_image.url;
  // });

  const Slider = ({ items }) => {
    if (items == null || items.results == null) return <h2>Loading...</h2>;

    let images = items.results.map((obj) => {
      return obj.data.main_image.url;
    });
    const absIndex = Math.abs(index);
    const i = absIndex % images.length;

    return <Image src={images[i]} />;
  };

  return (
    <div className="App">
      <Header showProducts={showProducts} setShowProducts={setShowProducts} />
      <Button setShowProducts={setShowProducts} showProducts={showProducts} />
      <div className="wrapper">
        <div className="slider">
          <button onClick={() => setIndex(index - 1)}>{"<"}</button>
          {isLoading && <h2>Loading...</h2>}
          {error ? <h2>An error ocurred</h2> : <Slider items={banners} />}

          <button onClick={() => setIndex(index + 1)}>{">"}</button>
        </div>

        <Categories />
        {isLoadingProducts && <h2>Loading...</h2>}
        {errorProducts ? (
          <h2>An error ocurred</h2>
        ) : (
          <FeaturedProducts featuredProducts={products.results} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
