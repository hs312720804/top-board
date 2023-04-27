const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
// const { dependencies: Dep } = require('./package.json')

const ENV = process.env.NODE_ENV
const isPro = ENV === 'production'
// const BACKEND = process.env.BACKEND || '172.20.151.197:9080' // 对接环境
const BACKEND = process.env.BACKEND || '172.20.151.12:9080' // 开发环境
// const BACKEND = process.env.BACKEND || '172.20.151.211:80' // 测试环境
// const BACKEND = process.env.BACKEND || 'api.cloud.coocaa.com' // 生产环境

const PORT = process.env.PORT || '8989'
const HOST = process.env.HOST || '127.0.0.1'
const baseUrl = ENV === 'production' ? '/topBoard/' : '/'

module.exports = defineConfig({
  // productionSourceMap: !isPro,
  // transpileDependencies: true,
  transpileDependencies: [
    '@ccprivate/utils',
    'echarts'
  ],
  publicPath: baseUrl,
  devServer: {
    https: true,
    host: HOST,
    port: PORT,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/databoard-api': {
        target: 'http://' + BACKEND,
        pathRewrite: { '^/databoard-api': '' }
      }
    },
    historyApiFallback: true
  },

  configureWebpack: {
    optimization: {
      splitChunks: {
        maxSize: 244000, // 打包出来的新的chunk最大的文件大小,单位 B
        minSize: 100000 // 打包出来的新的chunk最小的文件大小,单位 B，优先级大于maxSize
      }
    },
    
  }
})
