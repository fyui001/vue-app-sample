'use strict'

const baseConfig = require('./webpack.base.conf.js')
const { merge } = require('webpack-merge')

const HOST = 'localhost'
const PORT = 8000

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',

  devServer: {
    hot: true,
    contentBase: 'dist',
    host: HOST,
    port: PORT,
    open: true,
    historyApiFallback: true,
    watchOptions: {
      poll: true
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
})