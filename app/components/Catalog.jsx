import React, { Component } from 'react';

class Catalog extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-tabs nav-justified catalog-items'>
          <li className='catalog-item' role='presentation'><a href='#'>Nieuw</a></li>
          <li className='catalog-item' role='presentation'><a href='#'>Banken</a></li>
          <li className='catalog-item' role='presentation'><a href='#'>Stoelen</a></li>
          <li className='catalog-item' role='presentation'><a href='#'>Tafels</a></li>
          <li className='catalog-item' role='presentation'><a href='#'>Bedden</a></li>
          <li className='catalog-item' role='presentation'><a href='#'>Kasten</a></li>
          <li className='catalog-item' role='presentation'><a href='#'>Verlichting</a></li>
          <li className='catalog-item' role='presentation'><a href='#'>Decoratie</a></li>
          <li className='catalog-item' role='presentation'><a href='#'>Kantoor</a></li>
          <li className='catalog-item' role='presentation'><a href='#'>Kinderen</a></li>
        </ul>
      </div>
    );
  }
}

export default Catalog;