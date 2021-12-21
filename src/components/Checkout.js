import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import {useProductSearch} from '../utils/hooks/useProductSearch'
import Header from '../Header.js'
import Footer from '../Footer.js'
import './Products.css'
import Button from './Button'
import CartContext from '../utils/hooks/cartContext'

function Checkout({showProducts, setShowProducts}) {
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
    min-height: 400px;
  `

  const DivMain = styled.div`
    text-align: left;
    width: 80%;
    min-height: 600px;
  `

  const TableProducts = ({products}) => {
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
            <th>Name</th>
            <th>Subtotal</th>
          </tr>
          {products.map((product, index) => {
            return (
              <tr>
                <td>{product.qty}</td>
                <td>{product.product.data.name}</td>
                <td>${product.product.data.price * product.qty}</td>
              </tr>
            )
          })}
        </table>
        <h3>Total:${total}</h3>
      </div>
    )
  }

  const MainLayer = ({products}) => {
    console.log(products)

    const bol = typeof products !== 'undefined' && products.length > 0
    if (!bol) return <h1>No results</h1>

    return (
      <DivWrapper>
        <DivSideBar>
          <form>
            <span>Name:</span>
            <input></input>
            <br></br>
            <span>E-mail:</span>
            <input></input>
            <br></br>
            <span>Zipcode:</span>
            <input></input>
            <br></br>
            <span>Notes:</span>
            <br></br>
            <textarea></textarea>
          </form>
        </DivSideBar>
        <DivMain>
          <h1>Order Summary:</h1>
          <TableProducts products={products} />
          <Link to="/cart">
            <button>Go back to Cart</button>
          </Link>
          <button>Place order</button>
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

export default Checkout
