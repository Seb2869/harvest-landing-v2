const common = require("./webpack.common");
const {merge} = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'src'),
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif|webp|woff2|woff)$/,
        type: 'asset/resource',
      }
    ]
  },
});