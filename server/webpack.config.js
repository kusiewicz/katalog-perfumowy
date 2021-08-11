// import path from 'path';
// const nodeExternals = require('webpack-node-externals');
// import nodeExternals from 'webpack-node-externals';
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

// const __dirname = path.resolve(path.dirname(""));

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  entry: '../client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'client', 'public'),
  },
  //   plugins: [ new NodePolyfillPlugin()],
  target: 'node',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'client', 'public'),
  },
};

const serverConfig = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '..', 'server', 'dist'),
  },
  //   plugins: [ new NodePolyfillPlugin()],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
  },
};

module.exports = [serverConfig, clientConfig];
