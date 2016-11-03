import React, { Component } from 'react';

class NoMatch extends Component {
  render() {
    return (
      <div className='no-match'>
        <h1>Wow, this path is matching nothing</h1>
      </div>
    );
  }
}

export default NoMatch;