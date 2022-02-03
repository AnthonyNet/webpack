const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = path.resolve(__dirname, '.');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: dir + '/public',
    filename: '[name].[chunkhash:8].js',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {

  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename:dir + '/public/index.html',
        template:dir + '/src/index.html' 
    }),
    new CleanWebpackPlugin({
    }),
  ],
};

