const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

const plugins = [new HtmlWebpackPlugin({ template: "./src/index.html" })];
if (!devMode) {
  // enable in production only
  plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
  plugins,
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimize: devMode ? false : true,
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true,
  },
};
