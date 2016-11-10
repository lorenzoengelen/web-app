import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/catalog';
import _ from 'lodash';

const bannerStyle = {
  backgroundImage: 'url(' + require('../../assets/img/banner/office.jpg') + ')',
};

const titleStyle = {
  lineHeight: '120px'
};

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  onClick(id) {
    this.setCategory(id);
  }

  setCategory(id) {
    const category = this.props.categories[id] || this.props.subcategories[id];
    this.props.setCategory(category);
  }

  renderSubcategories(id) {
    const subcategories = this.props.categories[id].subcategories;
    return _.map(subcategories, id => {
      const subcategory = this.props.subcategories[id];
      return (
        <li
          className={this.props.currentCategory.id === id ? 'active' : ''}
          key={subcategory.id}
        >
            <a
              href='#'
              onClick={() => this.onClick(id)}
            >
              {subcategory.nl}
            </a>
        </li>
      );
    });
  }

  render() {
    const currentCategory = this.props.currentCategory;
    const categoryId = currentCategory.parentId;
    const categoryName = this.props.categories[categoryId].nl;
    return (
      <div className='banner' style={bannerStyle}>
        <h1 className='text-center banner-header' style={titleStyle}>{categoryName}</h1>
        <ul className='nav nav-pills nav-justified'>
          <li className={currentCategory.id === currentCategory.parentId ? 'active' : ''}>
            <a
              href='#'
              onClick={() => this.onClick(categoryId)}
            >
              Alle {categoryName}
            </a>
          </li>
          {this.renderSubcategories(categoryId)}
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

export default connect(mapStateToProps, actions)(Banner);