const path = require('path');

const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [path.join(parentDir, 'index.js')],
  devtool: 'source-map',
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
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: `${parentDir}/dist`,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
};
