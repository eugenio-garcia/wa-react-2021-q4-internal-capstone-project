import React, { useState } from "react";
import "./Home.css";

function FeaturedProducts({ featuredProducts }) {
  const products = featuredProducts;
  const [productItems, setProductItems] = useState(products);

  /*
        the main image of the product, its name, category, and price.
        image: obj.data.mainimage.url (has dimensions 696 900)
        name:  obj.data.name
        category: obj.data.category.slug
        price: obj.data.price
    */

  const GridItem = ({ name, image, category, price, id }) => {
    return (
      <div key={id} className="grid-item">
        <div className="grid-image">
          <img className="product-image" src={image} alt={name} />
        </div>
        <div>
          Name:<span> {name}</span>
        </div>
        <div>
          Category:<span> {category}</span>
        </div>
        <div>
          Price:<span style={{ color: "green" }}> ${price}</span>
        </div>
      </div>
    );
  };

  function Elements(props) {
    const items = props.items;
    if (items == null) return <h2>Loading...</h2>;
    const elements = items.map((item, index) => {
      return (
        <GridItem
          key={index}
          name={item.data.name}
          category={item.data.category.slug}
          price={item.data.price}
          image={item.data.mainimage.url}
        />
      );
    });

    return elements;
  }

  return (
    <div className="grid">
      <Elements items={products} />
    </div>
  );
}

export default FeaturedProducts;
