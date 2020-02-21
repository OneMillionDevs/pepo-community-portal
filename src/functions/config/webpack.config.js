// Webpack uses this to work with directories
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  target: "node",
  output: {
    path: path.resolve(__dirname, "../bundle`"),
    filename: "index.js"
  },

  /**
   * Rules
   * @description Set the Webpack Rules
   * 1. Babel Loader (babel-loader)
   */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: []
};
