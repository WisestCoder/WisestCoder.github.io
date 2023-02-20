module.exports = function closeMinimizePlugin() {
  return {
    name: 'close-minimize-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        optimization: {
          ...config.optimization,
          minimize: false,
          minimizer: undefined,
        },
      }
    },
  }
}