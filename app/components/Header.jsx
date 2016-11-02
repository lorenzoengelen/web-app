import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='navbar navbar-default'>
        <div className='container'>

          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#navbar-collapse-1'
              aria-expanded='false'>
              <span className='sr-only'>toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' href='#'>Peerdeco</a>
          </div>

          <div
            className='collapse navbar-collapse'
            classID='navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <button type='button' className='btn btn-danger navbar-btn sell-furniture'>Verkoop Meubilair</button>
              </li>
              <li><a href='#' className='login'>Inloggen</a></li>
              <li><a href='#' className='wishlist'>Verlanglijst <span className='badge'>0</span></a></li>
              <li><a href='#' className='shopping-cart'>Winkelmand <span className='badge'>0</span></a></li>
            </ul>
          </div>

        </div>
      </header>
    );
  }
}

export default Header;