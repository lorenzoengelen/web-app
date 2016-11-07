import { combineReducers } from 'redux';
import { RECEIVE_CATALOG } from '../constants/ActionTypes';

const catalog = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATALOG:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  catalog
});