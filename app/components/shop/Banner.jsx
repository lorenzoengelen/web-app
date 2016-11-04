import React, { Component } from 'react';

const bannerStyle = {
  backgroundImage: 'url(' + require('../../assets/img/office.jpg') + ')',
  backgroundSize: 'cover',
  // backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  minHeight: '200px',
  color: 'white'
  // maxHeight: '100%'
};

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.category;
    return (
      <div className='banner' style={bannerStyle}>
        <h1 className='text-center banner-header'>{category}</h1>
      </div>
    );
  }
}

export default Banner;