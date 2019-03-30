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
  })
  return config;
};
