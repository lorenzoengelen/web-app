import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  render() {
    return (
      <div>
        <div className='test'>This is the header</div>
        <span className='child'></span>
      </div>
    );
  }
}

export default Header;