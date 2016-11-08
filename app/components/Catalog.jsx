import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/catalog';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import _ from 'lodash';

const sellButtonStyle = {
  backgroundColor: '#F36D22',
  borderRadius: '0'
};

const catalogStyle = {
  backgroundColor: 'white',
  borderTop: 'solid 1px #acacad',
  borderBottom: 'solid 1px #acacad',
  width: '100%',
  padding: '5px 0'
};

const pillStyle = {
  color: '#595a5c'
};

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleMouseOver(e) {
    this.setState({show: e.target.id});
  }

  handleOnClick(e) {
    if (this.state.show) {
      this.setState({show: ''});
    } else {
      this.setState({show: e.target.id});
    }
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
            onMouseOver={this.handleMouseOver.bind(this)}
            onClick={this.handleOnClick.bind(this)}
            onToggle={() => {}}
            open={this.state.show === name}
            noCaret
            style={pillStyle}
          >
          {this.renderSubcategories(id)}
          </NavDropdown>
        </LinkContainer>
      );
    });
  }

  renderSubcategories(id) {
    const children = this.props.relations[id];
    const subcategories = this.props.subcategories;
    return _.map(children, (id) => {
      const {name, nl} = subcategories[id];
      return (
        <LinkContainer key={id} to={{pathname: `/shop/${name}`}}>
          <MenuItem
            className='catalog-subcategory'
            onClick={this.handleOnClick.bind(this)}>
            {nl}
          </MenuItem>
        </LinkContainer>
      );
    });
  }

  render() {
    console.log('PROPS', this.props);
    // this.props.setCategory(this.props.categories[2]);
    return (
      <div style={catalogStyle}>
        <div className='container catalog'>
          <Nav bsStyle='pills' justified>

            <li className='catalog-new'>
              <Link to={'/shop/new'} style={pillStyle}>Nieuw</Link>
            </li>

            {this.renderCategories()}

            <li className='catalog-sell active'>
              <Link to={'/sell'} style={sellButtonStyle}>Verkopen</Link>
            </li>

          </Nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.catalog.categories,
  subcategories: state.catalog.subcategories,
  relations: state.catalog.relations,
  currentCategory: state.catalog.currentCategory
});

export default connect(mapStateToProps, actions)(Catalog);