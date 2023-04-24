const common = require("./webpack.common");
const {merge} = require('webpack-merge');

module.exports = merge(common ,{
  mode: 'production',
  module: {
    rules: [
       {
         test: /\.html$/,
         loader: "html-loader",
         options: {
           sources: {
             list: [
               "...",
               {
                 tag: "img",
                 attribute: "data-src",
                 type: "src",
               },
              ]
           }
         }
       },
      {
        test: /\.(svg|png|jpg|gif|webp|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'public/[name][hash][ext]'
        }
      },
      {
        test: /(social-card\.jpg|(plus|minus)\.svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'public/[name][ext]'
        }
      },
    ]
  },
});
