import React from 'react';
import classes from './Item.module.css';
import {connect} from 'react-redux';
import {addItem} from '../../actions';

const Item = ({addItem, item}) => {
  const {id, name, price, discount, img_url} = item;
  const discountedPrice = Math.floor(price*((100-discount)/100));
  return(
    <div className={classes.Collection-item}>
      <img className={classes.Image} src={img_url} />
      <div >
        <div >{name}</div>
        <div>
        <div className={classes.Discount}>&#x20b9;{discountedPrice}</div>
        <div className={classes.Original}>{price}</div>
        <div className={classes.Percentage}>{discount}% off</div>
        </div>
      </div>
      <div>
        <button onClick={()=> addItem(item)}>ADD to cart</button>
      </div>
    </div>
  )
}

export default connect(null, {addItem})(Item);