import jsdom from 'jsdom';
import { expect } from 'chai';
import sinon from 'sinon';
import TestUtils from 'react-addons-test-utils';

// testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html');
global.window = document.defaultView;

// export
export {
  expect,
  sinon,
  TestUtils
};