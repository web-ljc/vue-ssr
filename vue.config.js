const { defineConfig } = require('@vue/cli-service')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require('lodash.merge')
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const taregt = TARGET_NODE ? 'server' : 'client'

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './dist/'+taregt,
  // 取消eslint校验
  lintOnSave: false,
  configureWebpack: () => ({
    // 将entry指向应用程序的server / client文件
    entry: `./src/entry-${taregt}.js`,
    devtool: 'source-map',
    target: TARGET_NODE ? 'node' : 'web',
    node: TARGET_NODE ? undefined : false,
    output: {
      // 此处告知 server bundle 使用 Node 风格到处模版
      libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
    },
    // 外置化应用程序模块化依赖，可以使服务器构建速度更快，并生成较小的bundle文件
    externals: TARGET_NODE ?
      nodeExternals({
        allowlist: [/\.css$/]
      }) : undefined,
    optimization: {
      splitChunks: TARGET_NODE ? false : undefined
    },
    // 将服务器的整个输出构建为单个JSON文件的插件
    // 服务端默认文件名为： vue-ssr-server-bundle.json
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  })
})
