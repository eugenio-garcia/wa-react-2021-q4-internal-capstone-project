import React, { useState } from "react";
import styled from "styled-components";
import banners from "../data/featured-banners.json";
import productCategories from "../data/product-categories.json";
import FeaturedProducts from "./FeaturedProducts";

const DivCategory = styled.div`
  border: 1px solid;
  min-width: 30vh;
  background-color: #5472d3;
`;

const ImageInSlider = styled.img`
  max-height: 100vh;
  width: 100vh;
`;

function Categories() {
  const categories = productCategories.results.map((obj) => {
    return obj.data.name;
  });
  const [categoryItems, setCategoryitems] = useState(categories.slice(0, 3));
  const [section, setSection] = React.useState(0);

  const Category = ({ name }) => {
    return (
      <DivCategory key={name} className="category">
        <p>{name}</p>
      </DivCategory>
    );
  };

  function Elements(props) {
    const items = props.items;
    const elements = items.map((item) => {
      return <Category key={item} name={item} />;
    });

    return elements;
  }

  const handleChangeNext = (event) => {
    if (section + 1 < 3) {
      const columns = [];
      let tmp = section + 1;
      for (var i = 0; i < 3; i++) {
        columns.push(categories[tmp + i]);
      }
      setSection(section + 1);
      setCategoryitems(columns);
    }
  };

  const handleChangeBack = (event) => {
    if (section - 1 >= 0) {
      const columns = [];
      var tmp = section - 1;
      for (var i = 0; i < 3; i++) {
        columns.push(categories[tmp + i]);
      }
      setSection(section - 1);
      setCategoryitems(columns);
    }
  };

  return (
    <div className="categoriesCarousel">
      <button className="button" onClick={handleChangeBack}>
        {"<"}
      </button>
      <Elements items={categoryItems} />
      <button className="button" onClick={handleChangeNext}>
        {">"}
      </button>
    </div>
  );
}

function Home() {
  const [index, setIndex] = React.useState(0);

  const Image = ({ src }) => {
    return <ImageInSlider className="slider" src={src} />;
  };

  const images = banners.results.map((obj) => {
    return obj.data.main_image.url;
  });

  const Slider = ({ images }) => {
    const absIndex = Math.abs(index);
    const i = absIndex % images.length;

    return <Image src={images[i]} />;
  };

  return (
    <div className="wrapper">
      <div className="slider">
        <button onClick={() => setIndex(index - 1)}>{"<"}</button>
        <Slider images={images}>{/* <Images /> */}</Slider>

        <button onClick={() => setIndex(index + 1)}>{">"}</button>
      </div>

      <Categories />
      <FeaturedProducts />
    </div>
  );
}

export default Home;
