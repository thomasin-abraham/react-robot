const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
              }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')()
              ]
            }
          }]
        })
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    })
  ]
}
