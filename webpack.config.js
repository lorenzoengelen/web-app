module.exports = {
  entry: [__dirname + '/client/src/index'],
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js'
  },
  watch: true
};