const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/dist',
  },
  module: {
    rules: [
      /*{
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: true,
        },
      },*/
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }],
  },
};
