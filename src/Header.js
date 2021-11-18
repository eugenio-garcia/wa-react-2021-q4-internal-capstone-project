import logo from './logo.svg';
import magnifier from './magnifier.svg';
import cart from './cart.svg'
import React from 'react'

function Header() {




  return (
      <header className="App-header">

					<div>
					<img src={logo} className="App-logo" alt="logo" />
					<span>Food @ Home</span>
					</div>
					<div>
					<img src={magnifier} className="magnifier" alt="magnifier" />
					<input className="Search-Text"/>
					</div>
        	<img src={cart} className="cart" alt="cart" />

      </header>
  );
}

export default Header;