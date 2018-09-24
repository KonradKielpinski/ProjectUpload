//Konfiguracja Webpack
var path = require("path");
 
module.exports = {
  entry:"./resources/Components/index.jsx",
  output: { filename: "out.js", path: path.resolve(__dirname, "./resources/dist") },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  mode: "development", watch: true,
  module: {
    rules: [
      {
      test: /\.jsx$/, exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: { presets: ["es2015", "stage-2", "react"] }
      }
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader?url=false", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS
      ]
    },
    // {
    //   test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
    // },
    {
      test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
      }]
    },
    {
      test: /\.(jpg|png|gif|svg|pdf|ico)$/,
      use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[path][name]-[hash:8].[ext]'
              },
          },
      ]
    },
    ]
  }
}