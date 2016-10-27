const webpack = require('./webpack.config');

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      // mocha testing framework
      'mocha',
      // chai assertion library
      'chai'
    ],
    reporters: [
      // set reporter to print detailed results to console
      'spec',
      // output code coverage files
      'coverage'
    ],
    files: [
      // React.js requires bind and phantomjs does not support it
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      // grab all files in the test directory that contain _test.
      'test/**/*_test.*'
    ],
    preprocessors: {
      // convert files with webpack and load sourcemaps
      'test/**/*_test.*': ['webpack', 'sourcemap']
    },
    browsers: [
      // run tests using PhantomJS
      'PhantomJS'
    ],
    singleRun: true,
    // configure coverage reporter
    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'
    },
    // test webpack config
    webpack: webpack,
    // hide webpack build information from output 
    webpackMiddleware: {
      noInfo: true
    }
  });
};