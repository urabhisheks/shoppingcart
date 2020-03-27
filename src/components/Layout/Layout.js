import React, { Component } from 'react'
// import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';
import Sort from '../Sort/Sort';
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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
      // <Aux>
      <div className={classes.Content}>
        {/* <Header drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <div className={classes.Content}> */}
          <Sort />
          <Items />
        {/* </div> */}
        {/* <Footer/> */}
        {/* <SideDrawer open={this.state.showsideDrawer} closed={this.sideDrawerClosedHandler}/> */}
      </div>
      // <main className={classes.Content} >
      //   {this.props.children}
      // </main>
      // </Aux>
    )
  } 
};
export default Layout;