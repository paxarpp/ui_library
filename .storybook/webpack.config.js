const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name][hash].[ext]'
            }
          }
        ]
      }
    ]
  },
};
