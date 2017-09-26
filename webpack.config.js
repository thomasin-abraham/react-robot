const path = require('path')

module.exports = {
  entry: './src',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
