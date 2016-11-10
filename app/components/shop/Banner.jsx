import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/catalog';
import _ from 'lodash';

import beds from '../../assets/img/banner/beds.jpg';
import chairs from '../../assets/img/banner/chairs.jpg';
import decoration from '../../assets/img/banner/decor.jpg';
import lighting from '../../assets/img/banner/lighting.jpg';
import newCat from '../../assets/img/banner/new.jpg';
import sofas from '../../assets/img/banner/sofas.jpg';
import storage from '../../assets/img/banner/storage.jpg';
import tables from '../../assets/img/banner/tables.jpg';

const categories = {
  beds: beds,
  chairs: chairs,
  decoration: decoration,
  lighting: lighting,
  new: newCat,
  sofas: sofas,
  storage: storage,
  tables: tables
};

const bannerStyle = {
  backgroundImage: 'url(' + require('../../assets/img/banner/chairs.jpg') + ')'
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
    const categoryParent = this.props.categories[categoryId].name;
    const categoryName = this.props.categories[categoryId].nl;
    const background = {
      backgroundImage: `url(${categories[categoryParent]})`
    };
    return (
      <div className='banner' style={background}>
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