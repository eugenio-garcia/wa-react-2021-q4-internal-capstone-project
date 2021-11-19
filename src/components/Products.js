import React from "react";
import styled from 'styled-components'
import products from "../data/featured-products.json";
import categories from "../data/product-categories.json";
import FeaturedProducts from "./FeaturedProducts";
import "./Products.css";

const DivWrapper = styled.div`
`;

const DivSideBar = styled.div`
  float: left;
  width: 20%;
`;

const DivMain = styled.div`
  width: 80%;
`;

function SideBar() {
  return <DivSideBar>SideBar</DivSideBar>;
}

function MainLayer() {
  return <DivMain><FeaturedProducts/></DivMain>;
}

function Products() {
  return (
    <DivWrapper>
      <SideBar />
      <MainLayer />
    </DivWrapper>
  );
}

export default Products;
