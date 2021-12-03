import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import products from "../data/featured-products.json";
import productCategories from "../data/product-categories.json";
import FeaturedProducts from "./FeaturedProducts";
import Header from "../Header.js";
import Footer from "../Footer.js";
import "./Products.css";
import Button from "./Button";

function Products({ showProducts, setShowProducts }) {
  const [productItems, setProductItems] = useState(products.results);
  const [currentCategory, setCurrentCategory] = useState([]);

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
  `;

  const List = styled.ul`
    list-style-type: none;
    margin: 10;
    padding: 10;
    width: 200px;
    background-color: ${(props) => props.theme.bg};
  `;

  const StyledItem = styled.a`
    color: ${(props) => props.theme.fg};
    background: ${(props) => props.theme.bg};

    display: block;
    padding: 8px 16px;
    text-decoration: none;

    &:hover {
      background-color: ${(props) => props.theme.fg};
      color: ${(props) => props.theme.bg};
    }
  `;

  const handleChangeCategory = (event) => {
    const category = event.target.name.toLowerCase();
    let tmpCurrentCategory = currentCategory;

    //console.log(currentCategory);
    if (currentCategory.includes(category)) {
      //remove
      tmpCurrentCategory = tmpCurrentCategory.filter(function (e) {
        return e !== category;
      });
    } else {
      //append
      tmpCurrentCategory.push(category);
    }

    setCurrentCategory(tmpCurrentCategory);

    let newProductItems = products.results.filter((product) => {
      return tmpCurrentCategory.includes(product.data.category.slug);
    });

    setProductItems(newProductItems);
  };

  function MenuItem({ name }) {
    const [isActive, setIsActive] = useState(false);

    return (
      <StyledItem
        className={currentCategory.includes(name.toLowerCase()) ? "active" : ""}
        href="#"
        onClick={handleChangeCategory}
        name={name}
      >
        {name}
      </StyledItem>
    );
  }

  function Categories() {
    const categories = productCategories.results.map((obj) => {
      return obj.data.name;
    });

    const Category = ({ name }) => {
      return (
        <li key={name} className="category">
          <MenuItem name={name} />
        </li>
      );
    };

    function Elements(props) {
      const items = props.items;
      const elements = items.map((item) => {
        return <Category key={item} name={item} />;
      });

      return elements;
    }

    return (
      <ThemeProvider theme={theme}>
        <div className="categoriesNavBar">
          {currentCategory.join(", ")}
          <DivSideBar>
            <List className="navBar">
              <Elements items={categories} />
            </List>
          </DivSideBar>
        </div>
      </ThemeProvider>
    );
  }
  const MainLayer = ({ productItems }) => {
    return (
      <DivMain>
        <FeaturedProducts featuredProducts={productItems} />
      </DivMain>
    );
  };

  return (
    <div className="App">
      <Header showProducts={showProducts} setShowProducts={setShowProducts} />
      <Button setShowProducts={setShowProducts} showProducts={showProducts} />
      <DivWrapper>
        <Categories />
        <MainLayer productItems={productItems} />
      </DivWrapper>
      <Footer />
    </div>
  );
}

export default Products;
