
import React from 'react'
import featuredProducts from '../data/featured-products.json'
import './Home.css'

function FeaturedProducts(){
    const products = featuredProducts.results;
    const [productItems] = React.useState(products);
    /*
        the main image of the product, its name, category, and price.
        image: obj.data.mainimage.url (has dimensions 696 900)
        name:  obj.data.name
        category: obj.data.category.slug
        price: obj.data.price
    */

    const GridItem = (props) => {
        return (
        <div key={props.name} className="grid-item" >
            <div className="grid-image">
                <img className="product-image" src={props.image} alt={props.name}/>
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
        const elements = items.map((item) => {
            return <GridItem key={item.data.name} name={item.data.name} category={item.data.category.slug} price={item.data.price} image={item.data.mainimage.url}/>
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