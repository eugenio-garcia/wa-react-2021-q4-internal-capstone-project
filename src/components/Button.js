import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {Link} from 'react-router-dom'

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

const ButtonStyled = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`

function Button({showProducts, setShowProducts}) {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyled onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? (
          <Link to="/">Home Page</Link>
        ) : (
          <Link to="/products">View all products</Link>
        )}
      </ButtonStyled>
    </ThemeProvider>
  )
}

export default Button
