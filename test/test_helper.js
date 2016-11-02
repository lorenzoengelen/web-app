import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
// import chaiJsx from 'chai-jsx';
// import {jsdom} from 'jsdom';

chai.use(chaiEnzyme());
// chai.use(chaiJsx);

// global.document = jsdom('<!doctype html><html><body></body></html>');
// global.window = document.defaultView;
// global.navigator = global.window.navigator;

// var jsdom = require('jsdom').jsdom;

// global.document = jsdom('');
// global.window = document.defaultView;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     global[property] = document.defaultView[property];
//   }
// });

// global.navigator = {
//   userAgent: 'node.js'
// };