import catalog from '../api/catalog';
import * as types from '../constants/ActionTypes';

const receiveCatalog = categories => ({
  type: types.CATALOG_FETCH_SUCCESS,
  categories
});

export const fetchCatalog = () => dispatch => {
  catalog.getCategories(categories => {
    dispatch(receiveCatalog(categories));
  });
};

export const setCategory = category => {
  console.log('CATEGORY', category);
  return {
    type: types.CATALOG_SET_CATEGORY,
    category
  };
};