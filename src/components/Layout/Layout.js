import React, { Component } from 'react'
// import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {applyFilter} from '../../actions/index';
import {connect} from 'react-redux';
import Items from '../Items/Items';
import Sort from '../Sort/Sort';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Layout extends Component {
  
  state={
    showsideDrawer: false,
    value: { min: 200, max: 300 },
  }

  sideDrawerClosedHandler=() =>{
    this.setState({showsideDrawer:false});
  }

  sideDrawerToggleHandler =()=>{
    this.setState((prevState) => ({showsideDrawer: !prevState.showsideDrawer}));
  }

  render() {
    console.log('props ', this.props);
    return (
      
      <div className={classes.Content}>
        <div className="container-fluid">
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 hidden-xs">
            <h2>Fliters</h2><br></br>
            <InputRange
              maxValue={600}
              minValue={100}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
              <div className="row text-center">Price</div>
              <div className={`row text-center ${classes.applyBtn}`}>
                <button onClick={()=>this.props.applyFilter(this.state.value.min, this.state.value.max)}>
                  Apply</button></div>
          </div>
          <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
            <div className="row text-center hidden-md hidden-lg">
              <div className="col-xs-6 col-sm-6 text-center">
                <span data-toggle="modal" data-target="#myModal">Filter</span>
              </div>
              <div className="col-xs-6 col-sm-6 text-center">
                <span data-toggle="modal" data-target="#myModal1">Sort By</span>
              </div>
            </div>
          <Sort />
          <Items />
          </div>
          
        </div>
        <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
            <InputRange
              maxValue={600}
              minValue={100}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
            </div>
          </div>
        </div>
      </div>

      <div id="myModal1" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
            Sorting section
            </div>
          </div>
        </div>
      </div>
      </div>
      
    )
  } 
};
export default connect(null, {applyFilter})(Layout);