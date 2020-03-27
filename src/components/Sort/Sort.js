import React from 'react'
import {connect} from 'react-redux';
import {sortByPriceAsc, sortByPriceDesc, sortByDiscount} from '../../actions/index';
import classes from './Sort.module.css';

const Sort = props => {
  const {sortByPriceAsc, sortByPriceDesc, sortByDiscount} = props;
  return(
    <div className={classes.DesktopOnly}>
      <h2 className={classes.Sort} >Sort By</h2>
      <span onClick={sortByPriceDesc} className={classes.Filter}> Price -- High Low</span>
      <span onClick={sortByPriceAsc} className={classes.Filter}> Price -- Low High</span>
      <span onClick={sortByDiscount} className={classes.Filter}> Discount</span>
    </div>
  )
}

export default connect(null, {sortByPriceAsc, sortByPriceDesc, sortByDiscount})(Sort);