const webpack = require('webpack');

const path = require('path');

module.exports = {
  pwa: {
    name: 'PP'
  },
  configureWebpack: {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            import: [path.resolve('./src/lib/styles/mixins/index.styl')],
          }
        }
      })
    ]
  }
}