import React from 'react'
import {connect} from 'react-redux';
import CartItem from '../CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = props => {
  console.log('cart ', props.cartItems);
  const {cartItems} = props;
  let totalPrice =0
  let totalDiscountedPrice =0;
  let totalDiscount = 0;
  cartItems.map(item=> {
    totalPrice += item.quantity * item.price;
    totalDiscountedPrice += item.quantity *Math.floor(item.price*((100-item.discount)/100));
  })
  return (
    // <>
    <div className={classes.Cart}>
      <div className={classes.content}>
      {
        cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)
      }
      </div>
      {cartItems && cartItems.length ? <div className={classes.priceDetails}>
        <h4>PRICE DETAILS</h4>
        <hr/>
        <div className={classes.addmargin}>
          <div className={classes.moveleft}> Price</div>
          <div className={classes.moveright}>{totalPrice}</div>
        </div>
        <div className={classes.addmargin}>
          <div className={classes.moveleft}>Discount</div>
          <div className={classes.moveright}>{totalPrice - totalDiscountedPrice}</div>
        </div>
        <hr className={classes.ruler}/>
        <div className={classes.total}>
          <div className={classes.moveleft}>Total Payable</div>
          <div className={classes.moveright}>&#x20b9;{totalDiscountedPrice}</div>
        </div>
      </div>:''}
    </div>
    // <div className={classes.priceDetails}>
    //   <h1>PRRICE</h1>
    // </div>
    // </>
  )
};

const mapStateToProps = ({cart}) => ({
  cartItems: cart.cartItems
});
export default connect(mapStateToProps)(Cart);