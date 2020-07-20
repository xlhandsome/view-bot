const TerserWebpackPlugin = require('terser-webpack-plugin') //压缩js
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { cleanDist } = require('../lib/cleanDist');
const webpack = require('webpack')
const path = require('path');
const resolve = dir => path.resolve(__dirname, '../', dir)

cleanDist(resolve('./dist'))

module.exports = {
  output: {
    filename: '[name].[hash].js', 
    path: path.resolve(__dirname, '../dist'),
  },
  optimization: {
    minimizer: [
        new TerserWebpackPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.sass'], //后缀名自动补全
    alias: {
        '@': resolve('./src'),
        '~': resolve('./public'),
        '#': resolve('./lib')
    },
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx|ts|tsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env'],
              plugins: [
                  "@babel/plugin-proposal-nullish-coalescing-operator",
                  "@babel/plugin-proposal-optional-chaining",
                  "@babel/plugin-transform-runtime"
              ]
          },
      
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css|sass$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css', 
    }),
  ],
};