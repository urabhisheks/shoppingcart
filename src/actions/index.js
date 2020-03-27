import * as actions from './action.type';

export const addItem = item => ({
  type: actions.ADD_ITEM,
  payload: item,
});

export const setCurrentUser = (user) => ({
  type: actions.SET_CURRENT_USER,
  payload: user,
});

export const toggleCartHidden = () => ({
  type: actions.TOGGLE_CART_HIDDEN,
});

export const clearItemFromCart = (item) => ({
  type: actions.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const searchByName = name => ({
  type: actions.SEARCH_BY_NAME,
  name,
});

export const removeItem = (item) => ({
  type: actions.REMOVE_ITEM,
  payload: item,
});

export const sortByPriceAsc = () => ({
  type:actions.SORT_BY_PRICE_ASC
});

export const sortByPriceDesc = () => ({
  type:actions.SORT_BY_PRICE_DESC
});

export const sortByDiscount = () => ({
  type:actions.SORT_BY_PRICE_DISCOUNT
});

export const apiData = payload => ({
  type:actions.API_DATA,
  payload
});