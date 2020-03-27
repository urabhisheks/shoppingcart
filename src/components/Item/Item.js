import React from 'react';
import classes from './Item.module.css';
import {connect} from 'react-redux';
import {addItem} from '../../actions';
// import Button from '../Button/Button';

// import './Item.scss';

const Item = ({addItem, item}) => {
  const {id, name, price, discount, img_url} = item;
  // console.log(id, name, price, discount, img_url);
  const discountedPrice = Math.floor(price*((100-discount)/100));
  return(
    <div className={classes.Collection-item}>
      {/* <div className={classes.Image} style={{backgroundImage: `url(${img_url})`}} />  */}
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
      {/* <div style={{height:'100px'}}></div> */}
      {/* <Button onClick = {()=> addItem(item)} inverted>ADD to cart</Button> */}
    </div>
  )
}

export default connect(null, {addItem})(Item);
// export default Item;