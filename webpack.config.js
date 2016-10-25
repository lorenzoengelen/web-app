module.exports = {
  entry: [__dirname + '/client/src/index'],
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: [/\.js$/],
        include: __dirname + '/client/src',
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: [/\.js?$/],
        include: __dirname + '/client/src',
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};