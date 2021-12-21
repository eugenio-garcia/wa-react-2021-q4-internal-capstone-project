import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import './Products.css'
import Button from './Button'
import CartContext from '../utils/hooks/cartContext'

const RemoveButton = function(props) {
  const cartObject = useContext(CartContext)
  return (
    <button
      onClick={() =>
        cartObject.removeProduct(cartObject.cart.indexOf(props.product))
      }
    >
      Remove
    </button>
  )
}

const InputQuantity = function(props) {
  const cartObject = useContext(CartContext)

  const handleOnChange = event => {
    cartObject.editProductToCart(props.product.product, event.target.value)
  }

  return <input value={props.initial} onChange={handleOnChange} />
}

const ShoppingCartPage = function({showProducts, setShowProducts}) {
  const cartObject = useContext(CartContext)

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
    text-align: left;
    width: 80%;
    min-height: 600px;
  `

  const TableProducts = function({products}) {
    console.log(products)
    let total = 0
    for (let i = 0; i < products.length; i++) {
      total += products[i].product.data.price * products[i].qty
    }

    return (
      <div>
        <table>
          <tr>
            <th>Qty</th>
            <th>Image</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
          {products.map((product, index) => (
              <tr>
                <td>
                  <InputQuantity
                    initial={product.qty}
                    product={product}
                   />
                </td>
                <td>
                  <img
                    style={{maxWidth: '30px'}}
                    src={product.product.data.mainimage.url}
                  />
                </td>
                <td>{product.product.data.name}</td>
                <td>{product.product.data.price}</td>
                <td>{product.product.data.price * product.qty}</td>
                <td>
                  <RemoveButton product={product} />
                </td>
              </tr>
            ))}
        </table>
        <h3>Total:{total}</h3>
        <Link to="/checkout">Proceed to checkout</Link>
      </div>
    )
  }

  const MainLayer = function({products}) {
    console.log(products)

    const bol = typeof products !== 'undefined' && products.length > 0
    if (!bol) return <h1>No results</h1>

    return (
      <DivWrapper>
        <DivSideBar />
        <DivMain>
          <h1>Shoppping Cart:</h1>
          <TableProducts products={products} />
        </DivMain>
      </DivWrapper>
    )
  }

  return (
    <div className="App">
      <Header showProducts={showProducts} setShowProducts={setShowProducts} />
      <Button setShowProducts={setShowProducts} showProducts={showProducts} />

      <MainLayer products={cartObject.cart} />

      <Footer />
    </div>
  )
}

export default ShoppingCartPage
