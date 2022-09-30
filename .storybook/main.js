const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
   staticDirs: ['../public'],
     webpackFinal: async (config, {
       configType
     }) => {
       // register webpack path aliases
       config.resolve.alias['~storybook'] = path.resolve(__dirname);
       config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src');
       return config;
     },
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}