var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['react']
        }
      }
    ]
  },
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/public/",
    filename: "bundle.js"
  }
};

module.exports = config;
