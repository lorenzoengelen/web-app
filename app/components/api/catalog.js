// mocking client-server processing
import _categories from './categories.json';

const TIMEOUT = 100;

export default {
  getCategories: (cb, timeout) => setTimeout(() => cb(_categories), timeout || TIMEOUT)
};