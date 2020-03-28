import React, { Component } from 'react'
import classes from './Layout.module.css';
import {applyFilter, sortByPriceAsc, sortByPriceDesc, sortByDiscount} from '../../actions/index';
import {connect} from 'react-redux';
import Items from '../Items/Items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSort, faFilter } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import Sort from '../Sort/Sort';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Layout extends Component {
  
  state={
    showsideDrawer: false,
    value: { min: 200, max: 300 },
    price:false,
    sort:false
  }

  sideDrawerClosedHandler=() =>{
    this.setState({showsideDrawer:false});
  }

  sideDrawerToggleHandler =()=>{
    this.setState((prevState) => ({showsideDrawer: !prevState.showsideDrawer}));
  }

  displayModal = val => {
    console.log('display Modal')
    this.setState({[val]: true});
  }

  applyFilter = () => {
    this.setState({price: false, sort: false});
    this.props.applyFilter(this.state.value.min, this.state.value.max)
  }

  sortResult = () => {
    this.setState({price: false, sort: false});
    if(this.state.option==='high'){
      this.props.sortByPriceDesc();
    } else if(this.state.option==='low'){
      this.props.sortByPriceAsc();
    }else if(this.state.option==='discount'){
      this.props.sortByDiscount();
    }
  }

  closeModal(val){
    this.setState({[val]: false});
  }

  onSortChange = e => {
    this.setState({option: e.target.value})
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
                <button onClick={this.applyFilter}>
                  Apply</button></div>
          </div>
          <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
            <div className="row text-center hidden-md hidden-lg">
              <div className="col-xs-6 col-sm-6 text-center" onClick={()=>this.displayModal('sort')}>
                <span className ={classes.bold} data-toggle="modal" data-target="#myModal">
                <FontAwesomeIcon className={classes.margin} icon={faFilter} />
                  Filter</span>
              </div>
              <div name='price' onClick={()=>this.displayModal('price')} >
                <span className ={classes.bold} >
                <FontAwesomeIcon className={classes.margin} icon={faSort}/>
                  Sort By
                </span>
              </div>
            </div>
          <Sort />
          <Items />
          </div>
          {this.state.price && 
            <Modal show={this.state.price} modalClosed={() => this.closeModal('price')}>
               <div>
                <div className={classes.pricemodal}>Filter Options</div>
                <InputRange
                  maxValue={600}
                  minValue={100}
                  value={this.state.value}
                  onChange={value => this.setState({ value })} />
                <div style={{fontWeight: 'bold',marginTop: '15px'}}className="row text-center">Price</div>
                <div style={{marginTop: '30px'}}>
                  <div className={classes.cancel} onClick={() => this.closeModal('price')}>Cancel</div>
                  <div className={classes.apply} onClick={this.applyFilter}>Apply</div>
                </div>
            </div>
            </Modal>
          }

          {this.state.sort && 
            <Modal show={this.state.sort} modalClosed={() => this.closeModal('sort')}>
               <div>
                <div className={classes.pricemodal}>Sort Options</div>
              
                <div style={{fontWeight: 'bold'}}className="row text-center">
                </div>
                <div style={{fontWeight: 'bold',color: 'gray'}}>
                    <div className={classes.marginbottom} >
                      <input style={{marginRight: '10px'}} type="radio" name="high" 
                        value='high' 
                        checked={this.state.option === 'high'} 
                        onChange={this.onSortChange} />{'Price -- High Low'}
                    </div>
                    <div className={classes.marginbottom}  >
                    <input style={{marginRight: '10px'}} type="radio" name="low" 
                      value='low'  
                      checked={this.state.option === 'low'} 
                      onChange={this.onSortChange} />{'Price -- Low High'}
                    </div>
                    <div className={classes.marginbottom}  >
                    <input style={{marginRight: '10px'}} type="radio" name="discount" 
                      value='discount'  
                      checked={this.state.option === 'discount'} 
                      onChange={this.onSortChange} />{'Discount'}
                    </div>
                  <div className={classes.cancel} onClick={() => this.closeModal('sort')}>Cancel</div>
                  <div className={classes.apply} onClick={this.sortResult}>Apply</div>
                </div>
            </div>
            </Modal>
          }
        </div>
      </div>
      
    )
  } 
};
export default connect(null, {applyFilter, sortByPriceAsc, sortByPriceDesc, sortByDiscount})(Layout);