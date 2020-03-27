import React from 'react';
import {connect} from 'react-redux'
import {addItem ,clearItemFromCart, removeItem} from '../../actions';
import classes from './CartItem.module.css';

const CheckoutItem = ({cartItem, addItem ,clearItemFromCart, removeItem}) => {
  const {name, img_url, price, quantity, discount} = cartItem;
  const discountedPrice = Math.floor(price*((100-discount)/100));
  console.log('CheckoutItem');
  return (
    
    <div className={classes.checkoutitem}>
      <div className={classes.imagecontainer}>
        <img alt='key' src={img_url}/>
      </div>
      <div className={classes.width100}>
        <div className={classes.pair}>
          <div className={classes.name}> {name}</div>
          
          <div className={classes.price}>&#x20b9;{discountedPrice}</div>
          <div className={classes.Original}>{price}</div>
          <div className={classes.Percentage}>{discount}% off</div>
          <br/>
        </div>
        <div className={classes.quantity}>
          <div className={classes.changequantity} onClick={()=> removeItem(cartItem)} >-</div>
          <div className={classes.value}>{quantity}</div>
          <div className={classes.changequantity} onClick={()=> addItem(cartItem)} >+</div>
        </div>
        <div className={classes.inlineBlockDisplay}>
        <div className={classes.removebutton} onClick={()=> clearItemFromCart(cartItem)} >REMOVE</div>
        </div>
      </div>
    </div>

  );
}

export default connect(null, {addItem ,clearItemFromCart, removeItem})(CheckoutItem);