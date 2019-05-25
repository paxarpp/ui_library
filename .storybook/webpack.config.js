const path = require('path');
const pathToInlineSvg = path.resolve(__dirname, '../src/components/assets/');

module.exports = async ({ config, mode }) => {
  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = pathToInlineSvg;

  config.module.rules.push({
    test: /\.svg$/,
    include: pathToInlineSvg,
    use: [
      {
        loader: 'raw-loader'
      },
    ],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
