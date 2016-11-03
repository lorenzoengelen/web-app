import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import App from './components/App.jsx';
import Shop from './components/shop/Shop.jsx';
import NoMatch from './components/NoMatch.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute />
      <Route path='shop' component={Shop}>
        <Route path='/shop/:category' component={Shop} />
      </Route>
      <Route path='*' component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'));