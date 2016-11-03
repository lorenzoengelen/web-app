import React, { Component } from 'react';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import _ from 'lodash';

const categories = {
  1: {
    category: 'Nieuw'
  },
  2: {
    category: 'Banken',
    subcategories: [
      'Hoekbanken',
      'Tweezitsbank',
      'Driezitsbank',
      'Chaise Longue',
      'Slaapbank',
      'Eetkamerbank'
    ]
  },
  3: {
    category: 'Stoelen',
    subcategories: [
      'Armstoelen',
      'Eetkamerstoelen',
      'Krukken',
      'Barkrukken',
      'Bureaustoelen',
      'Poefen'
    ]
  },
  4: {
    category: 'Tafels',
    subcategories: [
      'Salontafels',
      'Eetkamertafels',
      'Bartafels',
      'Bureaus',
      'Sidetable',
      'Bijzettafels'
    ]
  },
  5: {
    category: 'Bedden',
    subcategories: [
      'Bedden',
      'Boxsprings',
      'Bedbanken',
      'Hoogslapers',
      'Stapelbedden',
      'Kinderbedden'
    ]
  },
  6: {
    category: 'Kasten',
    subcategories: [
      'Ladekasten',
      'Schoenenkasten',
      'Opbergkasten',
      'Boekenkasten',
      'Vitrinekasten',
      'Wandkasten',
      'Buffetkasten',
      'Tv Meubels',
      'Dressiors'
    ]
  },
  7: {
    category: 'Verlichting',
    subcategories: [
      'Kroonluchters',
      'Hanglampen',
      'Plafondlampen',
      'Tafellampen',
      'Wandlampen',
      'Vloerlampen',
      'Spots',
      'Inbouwlampen'
    ]
  },
  8: {
    category: 'Decoratie',
    subcategories: [
      'Vloerkleden',
      'Kapstokken',
      'Krantenbakken',
      'Spiegels',
      'Boekenplanken',
      'Opbergen',
      'Woonkussen'
    ]
  },
  9: {
    category: 'Kindermeubilair',
    subcategories: [
      'Bedden',
      'Boxen',
      'Commodes',
      'Kasten',
      'Kinderstoelen',
      'Stapelbedden'
    ]
  }
};

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {show: ''};
  }

  handleMouseOver(e) {
    this.setState({show: e.target.id});
  }

  handleMouseOut(e) {
    this.setState({show: ''});
  }

  renderCategories() {
    return _.map(categories, ({category, subcategories}, i) => {
      return (
        <NavDropdown
          className='catalog-category'
          title={category}
          key={i}
          id={category}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
          open={this.state.show === category}
          noCaret>
          {this.renderSubcategories(subcategories)}
        </NavDropdown>
      );
    });
  }

  renderSubcategories(subcategories) {
    return _.map(subcategories, (subcategory, i) => {
      return (
        <MenuItem
          className='catalog-subcategory'
          eventKey={subcategory}
          key={i}>
          {subcategory}
        </MenuItem>
      );
    });
  }

  render() {
    return (
      <div className='container catalog'>
        <Nav bsStyle='tabs' justified>
          {this.renderCategories()}
        </Nav>
      </div>
    );
  }
}

export default Catalog;