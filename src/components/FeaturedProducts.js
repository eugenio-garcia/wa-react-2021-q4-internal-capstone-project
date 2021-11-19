
import React from 'react'
import styled from 'styled-components';
import featuredProducts from '../data/featured-products.json'
import style from './Home.css'

function FeaturedProducts(){
    const products = featuredProducts.results;
    const [productItems,setProductitems] = React.useState(products);
    console.log(featuredProducts.results)
    /*
        the main image of the product, its name, category, and price.
        image: obj.data.mainimage.url (has dimensions 696 900)
        name:  obj.data.name
        category: obj.data.category.slug
        price: obj.data.price
    */

    const GridItem = (props) => {
        return (
        <div className="grid-item" key={props.name} >
            <div className="grid-image">
                <img className="product-image" src={props.image}/>
            </div>
            <div>
                Name:<span>{props.name}</span>
            </div>
            <div>
                Category:<span>{props.category}</span>
            </div>
            <div>
                Price:<span style={{color:"green"}}>${props.price}</span>
            </div>
            
        </div>);
    }

    function Elements(props) {
        const items = props.items;
        console.log(items);
        const elements = items.map((item) => {
            return <GridItem name={item.data.name} category={item.data.category.slug} price={item.data.price} image={item.data.mainimage.url}/>
        });

        return (
            elements
        );
    }
    



    return (
        <div className="grid">
        <Elements  items={productItems}/>
        </div>
    );
    

}

export default FeaturedProducts;