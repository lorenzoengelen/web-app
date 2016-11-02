import React, { Component } from 'react';

class Catalog extends Component {
  renderCatalogItems() {
    const categories = [
      'Nieuw',
      'Banken',
      'Stoelen',
      'Tafels',
      'Bedden',
      'Kasten',
      'Verlichting',
      'Decoratie',
      'Kantoor',
      'Kinderen'
    ];

    return categories.map(category => {
      return <li className='catalog-item' role='presentation'><a href='#'>{category}</a></li>;
    });
  }

  render() {
    return (
      <div className='container'>
        <ul className='nav nav-tabs nav-justified catalog-items'>
          {this.renderCatalogItems()}
        </ul>
      </div>
    );
  }
}

export default Catalog;