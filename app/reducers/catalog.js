import { combineReducers } from 'redux';
import { RECEIVE_CATALOG } from '../constants/ActionTypes';

const categories = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATALOG:
      return [...state, ...action.categories];
    default:
      return state;
  }
};

const subcategories = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  categories,
  subcategories
});