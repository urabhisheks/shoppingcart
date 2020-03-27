import React from 'react'
import classes from './Header.module.css';
import CartIcon from '../CartIcon/CartIcon';
import Logo from '../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Header = props => (
  <header className={classes.Header} >
    {/* <DrawerToggle clicked={props.drawerToggleClicked}/> */}
    <div className={classes.Logo} >
      <Logo />
    </div>
    {/* <nav className={classes.DesktopOnly} > */}
      {/* <NavigationItems /> */}
      <CartIcon />
    {/* </nav> */}
  </header>
);

export default Header;