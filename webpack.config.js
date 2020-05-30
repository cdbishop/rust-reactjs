const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './frontend/index.js',
  output: { path: __dirname + './static/assets/', filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
