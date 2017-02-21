
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./modules/data')

module.exports = {
  entry: {
    main: './entry.js'
  },

  output: {
    filename: 'bundle.js',
    path: 'output',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2016', 'react']
        }
       },
      { test: /\.css$/, loaders: [ 'css' ] }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('main', data.routes, data)
  ],

}
