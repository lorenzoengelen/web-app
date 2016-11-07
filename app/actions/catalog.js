import catalog from '../api/catalog';
import * as types from '../constants/ActionTypes';

const receiveCatalog = categories => ({
  type: types.RECEIVE_CATALOG,
  categories: categories
});

export const getCatalog = () => dispatch => {
  catalog.getCategories(categories => {
    dispatch(receiveCatalog(categories));
  });
};
