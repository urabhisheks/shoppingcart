import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../actions';
import Search from '../Search/Search';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './CartIcon.module.css';

const CartIcon = ({itemCount, toggleCartHidden}) => {

  return(
    <div className={classes.Carticon} onClick={toggleCartHidden}>
      {/* <ShoppingIcon className='shopping-icon'/> */}
      {/* <FontAwesomeIcon style={{marginRight: '10px'}} icon={faSearch} /> */}
      <Search />
      <Link to='/shoppingcart/cart' className={classes.Carticon}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {itemCount ? <span className={`${classes.itemcount} badge badge-warning `}>{itemCount}</span>:''}
      </Link>
    </div>
  );
}

const mapStateToProps = ({cart})=>({
  // itemCount: cartItems.reduce((quantity, cartItem) => quantity+ cartItem.quantity, 0)
  itemCount: cart.quantity
});

export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);