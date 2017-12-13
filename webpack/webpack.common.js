const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRootPlugin = require('html-webpack-react-root-plugin')

const parentDir = path.join(__dirname, '../')

module.exports = {
  entry: {
    app: './index.js'
  },
  plugins: [
    new CleanWebpackPlugin([`${parentDir}/dist`], { root: process.cwd() }),
    new HtmlWebpackPlugin({
      title: 'Train App'
    }),
    new ReactRootPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: `${parentDir}/dist`
  }
}
