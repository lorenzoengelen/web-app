import React, { Component } from 'react';

import Header from './Header.jsx';
import Catalog from './Catalog.jsx';

class App extends Component {
  render() {
    return (
      <div className='application'>
        <Header />
        <Catalog />
      </div>
    );
  }
}

export default App;