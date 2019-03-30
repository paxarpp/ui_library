module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.svg$/,
    loader: 'raw-loader'
  });
  config.module.rules.push({
    test: /\.(gif|png|jpe?g)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'img/[name][hash].[ext]'
        }
      }
    ]
  });
  return config;
};
