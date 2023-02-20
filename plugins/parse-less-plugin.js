module.exports = function parseLessPlugin() {
  return {
    name: 'parse-less-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.less$/,
              use: [
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 2,
                  },
                },
                {
                  loader: require.resolve('less-loader'),
                  options: {
                    lessOptions: {
                      javascriptEnabled: true,
                    },
                  },
                },
              ],
            },
          ],
        },
      }
    },
  }
}