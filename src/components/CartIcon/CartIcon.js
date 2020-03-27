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
      <Search />
      <Link to= '/cart' className={classes.Carticon}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {itemCount ? <span className={`${classes.itemcount} badge badge-warning `}>{itemCount}</span>:''}
      </Link>
    </div>
  );
}

const mapStateToProps = ({cart})=>({
  itemCount: cart.quantity
});

export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);