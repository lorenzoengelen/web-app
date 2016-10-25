var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
  test: [/\.js$/],
  include: __dirname + '/client/src',
  // remove any console.log statements from build
  loader: WebpackStripLoader.loader('console.log')
};

// push the new object into loaders array from original config
devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;