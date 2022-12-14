const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
});
