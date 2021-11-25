import React, {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import products from "../data/featured-products.json";
import productCategories from "../data/product-categories.json";
import FeaturedProducts from "./FeaturedProducts";
import "./Products.css";
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

function Categories() {
  const categories = productCategories.results.map((obj) => {
    return obj.data.name;
  });

  const Category = ({ name }) => {
    return (
      <li key={name} className="category">
        <StyledItem>{name}</StyledItem> 
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
      <FeaturedProducts featuredProducts={productItems}/>
    </DivMain>
  );
  }

function Products() {
  const [productItems,setProductItems] = useState(products.results);

  return (
    <DivWrapper>
      <Categories />
      <MainLayer productItems={productItems} />
    </DivWrapper>
  );
}

export default Products;
