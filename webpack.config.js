require("babel-register");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  mode: "development",
  devtool: "source-map",
  watch: true,
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "font/"
            }
          }
        ]
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Annas Website",
      template: "src/index.html",
      filename: "index.html"
    }),

    new HtmlWebpackPlugin({
      title: "typo",
      template: "src/pages/favorsky.html",
      filename: "favorsky.html"
    }),

    new HtmlWebpackPlugin({
      title: "Kamasutra",
      template: "src/pages/kamasutra.html",
      filename: "kamasutra.html"
    }),

    new HtmlWebpackPlugin({
      title: "annas peats",
      template: "src/pages/peats.html",
      filename: "peats.html"
    }),

    new HtmlWebpackPlugin({
      title: "plant Thrive",
      template: "src/pages/thrive.html",
      filename: "thrive.html"
    }),

    new HtmlWebpackPlugin({
      title: "foster for",
      template: "src/pages/fosterfor.html",
      filename: "fosterfor.html"
    }),

    new HtmlWebpackPlugin({
      title: "about",
      template: "src/pages/about.html",
      filename: "about.html"
    }),

    new HtmlWebpackPlugin({
      title: "test",
      template: "src/pages/test.html",
      filename: "test.html"
    }),

    new ExtractTextPlugin({
      filename: "style.css"
    })
  ]
};
module.exports = config;
