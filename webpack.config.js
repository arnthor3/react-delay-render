var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    preLoaders : [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude : '/node_modules/'
      }
    ],
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react',"react-hmre"]
        }
      }
    ]
  },
}