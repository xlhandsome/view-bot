const path = require('path');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
const ZipCss = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.base.config') //压缩js
const { merge } = require('webpack-merge')

const prodConfig = merge(baseConfig,{
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: './src/components.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd'
  },
  plugins:[
    new webpack.HashedModuleIdsPlugin(),
    new webpack.LoaderOptionsPlugin({
          minimize: true
        }),
    new ZipCss(),
  ],
  externals: [nodeExternals()]
})
module.exports = prodConfig;

