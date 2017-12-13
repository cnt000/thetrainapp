const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.svg$/,
        loaders: ['svg-react-loader']
      }
    ]
  },
  devServer: {
    contentBase: `${common.parentDir}/public`,
    historyApiFallback: true
  }
})
