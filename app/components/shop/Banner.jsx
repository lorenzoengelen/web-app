import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <h3>This is the banner</h3>
        <img src={require('../../assets/img/office.jpg')} className='img-responsive' alt='Responsive image'/>
      </div>
    );
  }
}

export default Banner;