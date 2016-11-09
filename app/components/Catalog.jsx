import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/catalog';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import _ from 'lodash';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick(id) {
    if (this.state.show) {
      this.setState({show: ''});
    } else {
      this.setState({show: id});
    }
    this.setCategory(id);
  }

  onMouseOver(id) {
    this.setState({show: id});
  }

  setCategory(id) {
    const category = this.props.categories[id] || this.props.subcategories[id];
    this.props.setCategory(category);
  }

  renderCategories() {
    const categories = this.props.categories;
    return _.map(categories, ({id, name, nl}) => {
      return (
        <LinkContainer key={id} to={{pathname: `/shop/${name}`}}>
          <NavDropdown
            className='catalog-category'
            title={nl}
            id={name}
            onMouseOver={() => this.onMouseOver(id)}
            onClick={() => this.onClick(id)}
            onToggle={() => {}}
            open={this.state.show === id}
            noCaret
          >
          {this.renderSubcategories(id)}
          </NavDropdown>
        </LinkContainer>
      );
    });
  }

  renderSubcategories(id) {
    const children = this.props.categories[id].subcategories;
    const subcategories = this.props.subcategories;
    return _.map(children, (id) => {
      const {name, nl} = subcategories[id];
      return (
        <LinkContainer key={id} to={{pathname: `/shop/${name}`}}>
          <MenuItem
            className='catalog-subcategory'
            onClick={() => this.onClick(id)}
          >
            {nl}
          </MenuItem>
        </LinkContainer>
      );
    });
  }

  render() {
    return (
      <div className='container catalog'>
        <Nav bsStyle='pills' justified>

          <li className='catalog-new'>
            <Link to={'/shop/new'}>Nieuw</Link>
          </li>

          {this.renderCategories()}

          <li className='catalog-sell'>
            <Link to={'/sell'}>Verkopen</Link>
          </li>

        </Nav>
      </div>
    );
  }
}

const mapStateToProps = ({catalog}) => ({
  categories: catalog.categories,
  subcategories: catalog.subcategories,
  currentCategory: catalog.currentCategory
});

export default connect(mapStateToProps, actions)(Catalog);