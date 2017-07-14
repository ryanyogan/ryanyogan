const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  webpack(config, { dev }) {
    config.plugins = config.plugins.filter(plugin => {
      return plugin.constructor.name !== 'UgilifyJsPlugin'
    })

    if (!dev) {
      config.plugins.push(new BabiliPlugin())
    }

    return config
  }
}