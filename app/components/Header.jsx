import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>

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
            id='navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>
              Hello
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;