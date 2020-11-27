const path = require('path')

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    }

    newConfig.module.rules.push({
      test: /\.(ts|tsx)/,
      include: [
        path.resolve(__dirname, '../components'),
        path.resolve(__dirname, '../stories'),
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['react-docgen'],
          },
        },
      ],
    })

    newConfig.resolve.extensions.push('.ts', '.tsx')

    return newConfig
  },
}
module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    }

    newConfig.module.rules.push({
      test: /\.s[ca]ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    })

    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../components'),
        path.resolve(__dirname, '../stories'),
      ],
      use: ['ts-loader'],
    })

    // newConfig.resolve.extensions.push('.ts', '.tsx')

    return newConfig
  },
}
