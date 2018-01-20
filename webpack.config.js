/* eslint-disable */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const babelExclude = /node_modules/;

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
      '@alphaeadev/dynamo-db-dao': path.join(__dirname, '../dynamo-db-dao/main/index.js')
    }
  },
  plugins: [
  ],
  externals: [nodeExternals()],
  target: 'node'
}

module.exports = config
