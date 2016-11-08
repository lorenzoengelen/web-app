import React, { Component } from 'react';

import Banner from './Banner.jsx';
import Filters from './Filters.jsx';

class Shop extends Component {
  render() {
    return (
      <div className='shop container'>
        <Banner />
        <Filters />
      </div>
    );
  }
}

export default Shop;