const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;

// expand Babel configuration to include necessary plugins during development
process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  style: path.join(__dirname, 'app/styles/main.css')
};

const common = {
  entry: {
    app: PATHS.app,
    style: PATHS.style
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   loaders: ['style', 'css'],
      //   include: PATHS.app
      // },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'], // enable caching for improved performance
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Peerdeco',
      appMountId: 'app',
      inject: false
    })
  ]
};

// default configuration
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      // contentBase: PATHS.build,
      historyApiFallback: true, // enable HTML5 based routing
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only', // display errors only
      host: process.env.HOST,
      port: process.env.PORT
    },
    module: {
      loaders: [
        // development specific CSS setup
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true
      })
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    // separate entry chunk for project vendor level dependencies
    entry: {
      vendor: Object.keys(pkg.dependencies)
    },
    // adding hashes to filenames
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        // extract CSS during build
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: PATHS.app
        }
      ]
    },
    plugins: [
    new CleanPlugin([PATHS.build]),
    // extract CSS
    new ExtractTextPlugin('[name].[chunkhash].css'),
    // extract vendor and manifest files
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // build React in an optimized manner
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
    ]
  });
}