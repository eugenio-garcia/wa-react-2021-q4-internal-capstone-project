import React, { useState } from "react";
import styled from "styled-components";
import productCategories from "../data/product-categories.json";

const DivCategory = styled.div`
  border: 1px solid;
  min-width: 30vh;
  background-color: #5472d3;
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
      for (let i = 0; i < 3; i++) {
        columns.push(categories[tmp + i]);
      }
      setSection(section + 1);
      setCategoryitems(columns);
    }
  };

  const handleChangeBack = (event) => {
    if (section - 1 >= 0) {
      const columns = [];
      let tmp = section - 1;
      for (let i = 0; i < 3; i++) {
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

export default Categories;
