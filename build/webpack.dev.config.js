const baseConfig = require('./webpack.base.config') 
const webpack = require('webpack')
const { merge } = require('webpack-merge')



const devConfig = merge(baseConfig,{
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: './src/app.js',
  devServer: {
    contentBase: './dist',
    port:1998,
    open: true,
    clientLogLevel: 'silent',
    stats: 'errors-warnings',
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),    
  ],
})
module.exports = devConfig;