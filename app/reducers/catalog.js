import { combineReducers } from 'redux';
import { RECEIVE_CATALOG } from '../constants/ActionTypes';

const categories = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATALOG:
      return {
        ...state,
        ...action.categories.filter(({id, parentId}) => {
          return id === parentId;
        }).reduce((obj, category) => {
          obj[category.id] = category;
          return obj;
        }, {})
      };
    default:
      return state;
  }
};

const subcategories = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATALOG:
      return {
        ...state,
        ...action.categories.filter(({id, parentId}) => {
          return id !== parentId;
        }).reduce((obj, category) => {
          obj[category.id] = category;
          return obj;
        }, {})
      };
    default:
      return state;
  }
};

export default combineReducers({
  categories,
  subcategories
});