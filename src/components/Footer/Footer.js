import React from 'react'
import classes from './Footer.module.css';
// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Footer = props => (
  <footer className={classes.Footer} >
    {/* <DrawerToggle clicked={props.drawerToggleClicked}/> */}
    {/* <div className={classes.Logo} > */}
      {/* <Logo /> */}
    {/* </div> */}
    {/* <nav className={classes.DesktopOnly} > */}
      {/* <NavigationItems /> */}
      <div className={classes.Copyright}> @copyright</div>
    {/* </nav> */}
  </footer>
);

export default Footer;