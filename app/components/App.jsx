import React, { Component } from 'react';

import Header from './Header.jsx';
import Catalog from './Catalog.jsx';

import amsterdam from '../assets/img/amsterdam.png';

const body = {
  backgroundColor: 'white',
  backgroundImage: `url(${amsterdam})`,
  // backgroundSize: '40% auto',
  backgroundSize: '500px',
  backgroundPosition: 'left top',
  backgroundRepeat: 'repeat-x'
};

class App extends Component {
  render() {
    return (
      <div className='application' style={body}>
        <Header />
        <Catalog />
        {this.props.children}
      </div>
    );
  }
}

export default App;