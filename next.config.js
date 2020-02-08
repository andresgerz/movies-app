// next.config.js
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withCSS({
    webpack(config, options) {
      return config
    }
  })