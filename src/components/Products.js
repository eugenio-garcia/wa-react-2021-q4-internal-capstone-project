import React, {useState, useEffect} from 'react'
import styled, {ThemeProvider} from 'styled-components'
//import products from "../data/featured-products.json";
//import productCategories from "../data/product-categories.json";
import {useProductCategories} from '../utils/hooks/useProductCategories'
import {useProducts} from '../utils/hooks/useProducts'
import FeaturedProducts from './FeaturedProducts'
import Header from '../Header.js'
import Footer from '../Footer.js'
import './Products.css'
import Button from './Button'

function Products({showProducts, setShowProducts}) {
  const [productItems, setProductItems] = useState() //useEffect?
  const [currentCategory, setCurrentCategory] = useState([])
  const {
    data: productCategories = {},
    isLoading,
    error,
  } = useProductCategories()
  const [{data: products = {}, isLoadingProducts, errorProducts}, setProducts] =
    useProducts(12)

  //
  useEffect(() => {
    setProductItems(products.results)
  }, [products])

  console.log(productItems)

  // Define our `fg` and `bg` on the theme
  const theme = {
    fg: '#00004f',
    bg: 'white',
  }

  // This theme swaps `fg` and `bg`
  const invertTheme = ({fg, bg}) => ({
    fg: bg,
    bg: fg,
  })
  const DivWrapper = styled.div``

  const DivSideBar = styled.div`
    float: left;
    width: 20%;
  `

  const DivMain = styled.div`
    width: 80%;
  `

  const List = styled.ul`
    list-style-type: none;
    margin: 10;
    padding: 10;
    width: 200px;
    background-color: ${props => props.theme.bg};
  `

  const StyledItem = styled.a`
    color: ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    display: block;
    padding: 8px 16px;
    text-decoration: none;

    &:hover {
      background-color: ${props => props.theme.fg};
      color: ${props => props.theme.bg};
    }
  `

  const handleChangeCategory = event => {
    const category = event.target.name.toLowerCase()
    let tmpCurrentCategory = currentCategory

    //console.log(currentCategory);
    if (currentCategory.includes(category)) {
      //remove
      tmpCurrentCategory = tmpCurrentCategory.filter(function (e) {
        return e !== category
      })
    } else {
      //append
      tmpCurrentCategory.push(category)
    }

    setCurrentCategory(tmpCurrentCategory)

    let newProductItems = products.results.filter(product => {
      return tmpCurrentCategory.includes(product.data.category.slug)
    })

    setProductItems(newProductItems)
  }

  const handleClearFilter = event => {
    setCurrentCategory([])
    setProductItems(products.results)
  }

  function MenuItem({name}) {
    const [isActive, setIsActive] = useState(false)

    return (
      <StyledItem
        className={currentCategory.includes(name.toLowerCase()) ? 'active' : ''}
        href="#"
        onClick={handleChangeCategory}
        name={name}
      >
        {name}
      </StyledItem>
    )
  }

  function Categories({productCategories}) {
    const categories = productCategories.results.map(obj => {
      return obj.data.name
    })

    const Category = ({name}) => {
      return (
        <li key={name} className="category">
          <MenuItem name={name} />
        </li>
      )
    }

    function Elements(props) {
      const items = props.items
      const elements = items.map(item => {
        return <Category key={item} name={item} />
      })

      return elements
    }

    return (
      <ThemeProvider theme={theme}>
        <div className="categoriesNavBar">
          {currentCategory.join(', ')}
          <DivSideBar>
            <List className="navBar">
              <Elements items={categories} />
            </List>
            <button onClick={handleClearFilter}>Clear Filter</button>
          </DivSideBar>
        </div>
      </ThemeProvider>
    )
  }
  function MainLayer({productItems}) {
    console.log(productItems)
    if (
      !productItems &&
      typeof productItems !== 'undefined' &&
      productItems.length > 0
    )
      return <h2>Loading..</h2>

    const bol = typeof productItems !== 'undefined' && productItems.length > 0
    console.log(bol)

    return (
      <DivMain>
        {productItems && bol ? (
          <FeaturedProducts featuredProducts={productItems} />
        ) : (
          <h2>No..</h2>
        )}
        {/*  */}
      </DivMain>
    )
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <Header showProducts={showProducts} setShowProducts={setShowProducts} />
      <Button setShowProducts={setShowProducts} showProducts={showProducts} />
      <DivWrapper>
        {isLoading && <h2>Loading...</h2>}
        {error ? (
          <h2>An error ocurred</h2>
        ) : (
          <div>
            <Categories productCategories={productCategories} />
          </div>
        )}

        {isLoadingProducts && <h2>Loading...</h2>}
        {errorProducts ? (
          <h2>An error ocurred</h2>
        ) : (
          <MainLayer productItems={productItems} />
        )}
        <div>
          <button>Last</button>
          <button>Next</button>
        </div>
      </DivWrapper>
      <Footer />
    </div>
  )
}

export default Products
