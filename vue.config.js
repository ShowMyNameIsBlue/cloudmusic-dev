const { resolve } = require('path')

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@api', resolve('src/api'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.94.195.231:3000', // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/api': '' // rewrite path
        }
      }
    }
  }
}
