const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  features: {
    emotionAlias: false,
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    /**
     *TODO: 임시 로직
     */
    config.resolve.alias['next/router'] = require.resolve(
      '../src/utils/storybookMock/router.js',
    )
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@mocks': path.resolve(__dirname, '../src/mocks'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@public': path.resolve(__dirname, '../public'),
      '@types': path.resolve(__dirname, '../src/types'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@apis': path.resolve(__dirname, '../src/apis'),
      '@queries': path.resolve(__dirname, '../src/queries'),
      '@assets': path.resolve(__dirname, '../public/assets'),
      '@images': path.resolve(__dirname, '../public/assets/images'),
      public: path.resolve(__dirname, '../public'),
    }

    return config
  },
}
