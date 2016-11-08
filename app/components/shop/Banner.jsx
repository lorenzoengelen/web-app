import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const bannerStyle = {
  backgroundImage: 'url(' + require('../../assets/img/office.jpg') + ')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '200px',
  color: 'white'
};

const titleStyle = {
  lineHeight: '120px'
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
    const category = this.props.categories[this.props.currentCategory.parentId].nl || '';
    return (
      <div className='banner' style={bannerStyle}>
        <h1 className='text-center banner-header' style={titleStyle}>{category}</h1>
        <ul className='nav nav-pills nav-justified'>
          {this.renderSubcategories()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({catalog}) => ({
  categories: catalog.categories,
  subcategories: catalog.subcategories,
  currentCategory: catalog.currentCategory
});

export default connect(mapStateToProps, null)(Banner);