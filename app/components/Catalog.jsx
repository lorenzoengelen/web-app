import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import _ from 'lodash';

import { data } from '../data.js';

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

  componentWillMount() {
    const categories = _.filter(data, ({id, parentId}) => {
      return id === parentId;
    });
    const subcategories = _.filter(data, ({id, parentId}) => {
      return id !== parentId;
    });
    this.setState({categories, subcategories});
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
    const categories = this.state.categories;
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
    const subcategories = this.state.subcategories;
    const filtered = _.filter(subcategories, ({parentId}) => {
      return id === parentId;
    });
    return _.map(filtered, ({id, name, nl}) => {
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
  relations: state.catalog.relations
});

export default connect(mapStateToProps, null)(Catalog);