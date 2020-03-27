import React, { Component } from 'react'
// import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';
import Sort from '../Sort/Sort';

class Layout extends Component {
  
  state={
    showsideDrawer: false,
  }

  sideDrawerClosedHandler=() =>{
    this.setState({showsideDrawer:false});
  }

  sideDrawerToggleHandler =()=>{
    this.setState((prevState) => ({showsideDrawer: !prevState.showsideDrawer}));
  }

  render() {
    return (
      
      <div className={classes.Content}>
      
          <Sort />
          <Items />
        
      </div>
      
    )
  } 
};
export default Layout;