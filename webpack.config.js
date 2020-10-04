const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  plugins: [new HTMLWebpackPlugin({
    title: 'Quicken Template'
  })],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};