import React, { Component } from 'react';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import _ from 'lodash';

const categories = {
  1: {
    name: 'Nieuw'
  },
  2: {
    name: 'Banken',
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
    name: 'Stoelen',
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
    name: 'Tafels',
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
    name: 'Bedden',
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
    name: 'Kasten',
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
    name: 'Verlichting',
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
    name: 'Decoratie',
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
    name: 'Kindermeubilair',
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
  renderCategories() {
    return _.map(categories, ({name, subcategories}, i) => {
      return (
        <NavDropdown
          className='catalog-item'
          title={name}
          key={i}
          id={`dropdown-basic-${i}`}
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