import React from 'react'
import classes from './Header.module.css';
import CartIcon from '../CartIcon/CartIcon';
import Logo from '../Logo/Logo';

const Header = props => (
  <header className={classes.Header} >
    
    <div className={classes.Logo} >
      <Logo />
    </div>
      <CartIcon />
    
  </header>
);

export default Header;