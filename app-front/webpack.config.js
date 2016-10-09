var path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve("../app-back/static/js/"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.(css|sass)$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node-modules/],
        loader: "elm-webpack"
      }
    ],
    noParse: /\.elm$/,
  }
}
