/* eslint-disable */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const babelExclude = /node_modules[\\/](?!@alphaeadev\/js-services)/;

var config = {
  entry: path.join(__dirname, 'src/server/server.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: babelExclude,
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'api-stubs': path.join(__dirname, 'api-stubs.js'),
    }
  },
  plugins: [
  ],
  externals: [nodeExternals()],
  target: 'node'
}

module.exports = config
