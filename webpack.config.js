require("babel-register");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    mode: "development",
    devtool: "source-map",
    watch: true,
    entry: ["./src/styles/main.scss", "./src/index.js"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js",
    },
    devServer: {
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                }),
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Annas Website",
            template: "src/index.html",
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: "Annas Blog",
            template: "src/pages/blog.html",
            filename: 'blog.html',
        }),
        new ExtractTextPlugin({
            filename: "style.css",
        }),
    ],
};
module.exports = config;
