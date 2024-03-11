const path = require("path");

module.exports = {
  cache: false,
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "js"),
    clean: true,
  },
  externals: {
    ymaps3: "ymaps3",
  },
  devtool: "inline-source-map",
};
