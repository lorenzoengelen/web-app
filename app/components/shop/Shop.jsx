import React, { Component } from 'react';

import Banner from './Banner.jsx';
import Filters from './Filters.jsx';

class Shop extends Component {
  render() {
    const category = this.props.params.category;
    return (
      <div className='shop container'>
        <Banner category={category} />
        <Filters />
      </div>
    );
  }
}

export default Shop;