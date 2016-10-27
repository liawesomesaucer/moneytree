var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: './app/static',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.s?css$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.[contenthash].css', { allChunks: true })
  ]
}
