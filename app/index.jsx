// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { fetchCatalog } from './actions/catalog';

// components
import App from './components/App.jsx';
import Shop from './components/shop/Shop.jsx';
import NoMatch from './components/NoMatch.jsx';

// redux store
const middleware = [thunk];
if (process.env.npm_lifecycle_event === 'start') {
  middleware.push(createLogger());
}
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);
store.dispatch(fetchCatalog());

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute />
        <Route path='shop' component={Shop}>
          <Route path='/shop/:category' component={Shop} />
        </Route>
        <Route path='*' component={NoMatch} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));