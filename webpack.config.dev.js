const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    port: 3001,
    hot: true,
    client: { overlay: false },
  },
  plugins: [new ReactRefreshPlugin()].filter(Boolean),
  devtool: "source-map",
});
