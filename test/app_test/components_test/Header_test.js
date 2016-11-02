import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {render, shallow} from 'enzyme';

chai.use(chaiEnzyme());

import Header from '../../../app/components/Header.jsx';

describe('<Header />', () => {

  const wrapper = shallow(<Header />);

  it('renders as a <nav>', () => {
    expect(wrapper.type()).to.equal('header');
  });

  it('renders a logo', () => {
    expect(wrapper.find('.navbar-brand')).to.have.length(1);
  });

  it('renders a sell furniture button', () => {
    expect(wrapper.find('.sell-furniture')).to.have.length(1);
  });

  it('renders a login button', () => {
    expect(wrapper.find('.login')).to.have.length(1);
  });

  it('renders a wishlist', () => {
    expect(wrapper.find('.wishlist')).to.have.length(1);
  });

  it('renders a shopping cart', () => {
    expect(wrapper.find('.shopping-cart')).to.have.length(1);
  });

});