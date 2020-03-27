import {ADD_ITEM, TOGGLE_CART_HIDDEN, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, 
  SORT_BY_PRICE_ASC, SORT_BY_PRICE_DESC, SORT_BY_PRICE_DISCOUNT, API_DATA, SEARCH_BY_NAME} from '../actions/action.type';
import {addItemToCart, removeItemFromCart} from '../Utils/cart.utils';

const INITITAL_STATE = {
  cartItems :[],
  hidden: true,
};

const cartReducer = (state = INITITAL_STATE, action) =>{
  let data;
  switch(action.type){
    case ADD_ITEM:
      // console.log('Item ', addItemToCart(state.cartItems, action.payload))
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        quantity: (state.quantity || 0) +1,
        // cartItems : [...state.cartItems, action.payload],
      };
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CLEAR_ITEM_FROM_CART:
      let quantity;
      state.cartItems.map(
        cartItem =>{ 
          if(cartItem.id === action.payload.id){
            quantity = cartItem.quantity;
          }
        });
      const newCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id);
      

      return {
        ...state,
        cartItems: newCartItems,
        quantity: state.quantity - quantity,
      }
    case REMOVE_ITEM: 
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        quantity: state.quantity -1,
      }
    case SORT_BY_PRICE_ASC:
      data = [...state.data];
      // const discountedPrice = Math.floor(price*((100-discount)/100));
      data = data.map(value => {
        value.discountedPrice = Math.floor(value.price*((100-value.discount)/100))
        return value;
      })
      data.sort((a,b)=> a.discountedPrice -b.discountedPrice);
      return{
        ...state,
        data: data
      }
    case SORT_BY_PRICE_DESC:
      data = [...state.data];
      // const discountedPrice = Math.floor(price*((100-discount)/100));
      data = data.map(value => {
        value.discountedPrice = Math.floor(value.price*((100-value.discount)/100))
        return value;
      })
      data.sort((a,b)=> b.discountedPrice -a.discountedPrice);
      return{
        ...state,
        data: data
      }
    case SORT_BY_PRICE_DISCOUNT:
      data = [...state.data];
      data.sort((a,b)=> b.discount -a.discount);
      return{
        ...state,
        data: data
      }
    case API_DATA:
      return{
        ...state,
        data: action.payload,
        originalValue: [...action.payload],
      }
    case SEARCH_BY_NAME:
      data = [...state.data];
      data = data.filter(value => value.name.includes(action.name));
      if(!action.name.length){
        data = [...state.originalValue];
      }
      return{
        ...state,
        data: data,
      };
    default:
      return state;
  }
}

export default  cartReducer;