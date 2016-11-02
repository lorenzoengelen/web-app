import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {render, shallow} from 'enzyme';

chai.use(chaiEnzyme());

import Header from '../../../app/components/Header.jsx';

describe('<Header />', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.type()).to.eql('div');
  });

  it('testing something', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('span')).to.have.className('child');
  })

  it('should render something', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsAllMatchingElements([
      <InputArea />,
      <BeerList />
    ])).to.equal(true);
  });

  // testing state
  it('should start with an empty list', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state('beers')).to.eql([]);
  });

});