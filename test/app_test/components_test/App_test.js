import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {render, shallow} from 'enzyme';

chai.use(chaiEnzyme());

import App from '../../../app/components/App.jsx';
import Header from '../../../app/components/Header.jsx';
import Catalog from '../../../app/components/Catalog.jsx';

describe('<App />', () => {

  const wrapper = shallow(<App />);

  it('renders a <Header />', () => {
    expect(wrapper.contains(<Header />)).to.equal(true);
  });

  it('renders a <Catalog />', () => {
    expect(wrapper.contains(<Catalog />)).to.equal(true);
  });

});