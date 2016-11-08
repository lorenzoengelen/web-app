import { combineReducers } from 'redux';
import {
  CATALOG_FETCH_SUCCESS,
  CATALOG_SET_CATEGORY
} from '../constants/ActionTypes';

const categories = (state = {}, action) => {
  switch (action.type) {
    case CATALOG_FETCH_SUCCESS:
      return {
        ...state,
        ...action.categories.filter(({id, parentId}) => {
          return id === parentId;
        }).reduce((obj, category) => {
          const children = action.categories.filter(({id, parentId}) => {
            return category.id === parentId && id !== parentId;
          });
          obj[category.id] = category;
          obj[category.id].subcategories = children.map(({id}) => { return id; });
          return obj;
        }, {})
      };
    default:
      return state;
  }
};

const subcategories = (state = {}, action) => {
  switch (action.type) {
    case CATALOG_FETCH_SUCCESS:
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

const currentCategory = (state = {}, action) => {
  switch (action.type) {
    case CATALOG_SET_CATEGORY:
      console.log('ACTION', action.category);
      return {
        ...state,
        ...action.category
      };
      default: 
        return state;
  }
};

export default combineReducers({
  categories,
  subcategories,
  currentCategory
});