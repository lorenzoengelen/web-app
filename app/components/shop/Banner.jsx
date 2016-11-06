import React, { Component } from 'react';
import _ from 'lodash';

const bannerStyle = {
  backgroundImage: 'url(' + require('../../assets/img/office.jpg') + ')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '200px',
  color: 'white'
};

const titleStyle = {
  lineHeight: '150px'
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
    if (category === 'new') { return 'Nieuw'; }
    const {parentId} = _.find(data, ({name}) => {
      return name === category;
    });
    const {nl} = _.find(data, ({id}) => {
      return id === parentId;
    });
    return nl;
  }

  renderSubcategories() {
    const {category} = this.props;
    if (category === 'new') { return; }
    const {parentId} = _.find(data, ({name}) => {
      return name === category;
    });
    const subcategories = _.filter(data, (item) => {
      return parentId === item.parentId && item.id !== item.parentId;
    });
    return _.map(subcategories, ({id, nl}) => {
      return (
        <li key={id}><a href='#'>{nl}</a></li>
      );
    });
  }

  render() {
    return (
      <div className='banner' style={bannerStyle}>
        <h1 className='text-center banner-header' style={titleStyle}>{this.getCategory()}</h1>
        <ul className='nav nav-pills nav-justified'>
          {this.renderSubcategories()}
        </ul>
      </div>
    );
  }
}

export default Banner;