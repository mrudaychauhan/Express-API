import { combineReducers } from 'redux';
import {products, cart}  from './reducer';

// Combines all the reducers
export default combineReducers({
  products,
  cart,
});
