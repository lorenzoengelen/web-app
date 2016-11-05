import React, { Component } from 'react';
import _ from 'lodash';

const bannerStyle = {
  backgroundImage: 'url(' + require('../../assets/img/office.jpg') + ')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '200px',
  color: 'white'
};

import { data } from '../../data.js';

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getCategory();
  }

  componentWillUpdate() {
    this.getCategory();
  }

  getCategory() {
    const {category} = this.props;
    const {parentId} = _.find(data, ({name}) => {
      return name === category;
    }) || {parentId: 0};
    const {nl} = _.find(data, ({id}) => {
      return id === parentId;
    }) || {nl: 'Nieuw'};
    console.log(nl);
    return nl;
  }

  render() {
    const {category} = this.props;
    return (
      <div className='banner' style={bannerStyle}>
        <h1 className='text-center banner-header'>{this.getCategory()}</h1>
      </div>
    );
  }
}

export default Banner;