import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {render, shallow} from 'enzyme';

chai.use(chaiEnzyme());

import Catalog from '../../../app/components/Catalog.jsx';

describe('<Catalog />', () => {

  const wrapper = shallow(<Catalog />);
  const categories = wrapper.find('.catalog-item').map(n => n.text());

  it('has item new "nieuw"', () => {
    expect(categories).to.include('Nieuw');
  });

  it('has item sofas "banken"', () => {
    expect(categories).to.include('Banken');
  });

  it('has item chairs "stoelen"', () => {
    expect(categories).to.include('Stoelen');
  });

  it('has item tables "tafels"', () => {
    expect(categories).to.include('Tafels');
  });

  it('has item beds "bedden"', () => {
    expect(categories).to.include('Bedden');
  });

  it('has item storage "kasten"', () => {
    expect(categories).to.include('Kasten');
  });

  it('has item lighting "verlichting"', () => {
    expect(categories).to.include('Verlichting');
  });

  it('has item decoration "decoratie"', () => {
    expect(categories).to.include('Decoratie');
  });

  it('has item office "kantoor"', () => {
    expect(categories).to.include('Kantoor');
  });

  it('has item children furniture "kinderen"', () => {
    expect(categories).to.include('Kinderen');
  });

});