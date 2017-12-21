const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRootPlugin = require('html-webpack-react-root-plugin')

const parentDir = path.join(__dirname, '../')

module.exports = {
  entry: {
    app: './index.js',
    vendor: ['react', 'react-dom']
  },
  plugins: [
    new CleanWebpackPlugin([`${parentDir}/dist`], { root: process.cwd() }),
    new HtmlWebpackPlugin({
      title: 'Train App'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new ReactRootPlugin()
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: `${parentDir}/dist`
  }
}
