const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/components.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css|sass$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  externals: [nodeExternals()]
};