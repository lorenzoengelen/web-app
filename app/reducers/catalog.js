import { combineReducers } from 'redux';
import { CATALOG_SUCCESS } from '../constants/ActionTypes';

const categories = (state = {}, action) => {
  switch (action.type) {
    case CATALOG_SUCCESS:
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
    case CATALOG_SUCCESS:
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

const relations = (state = {}, action) => {
  switch (action.type) {
    case CATALOG_SUCCESS:
      return {
        ...state,
        ...action.categories.filter(({id, parentId}) => {
          return id === parentId;
        }).reduce((obj, category) => {
          const children = action.categories.filter(({id, parentId}) => {
            return category.id === parentId && id !== parentId;
          });
          obj[category.id] = children.map(({id}) => { return id; });
          return obj;
        }, {})
      };
    default:
      return state;
  }
};

export default combineReducers({
  categories,
  subcategories,
  relations
});