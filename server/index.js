// nodejs服务器
const express = require('express')
const Vue = require('vue')
const fs = require('fs')
const path = require('path')

// 创建express实例和vue实例
const app = express()
// 创建渲染器
const {createBundleRenderer} = require('vue-server-renderer')
// 服务端bundle
const serverBundle = require('../dist/server/vue-ssr-server-bundle.json')
// 清单
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync('../public/index.temp.html', 'utf-8'), // 宿主模版文件
  clientManifest
})

// 中间件处理静态文件
app.use(express.static('../dist/client', {index: false}))
// app.use(express.static('../dist/client'))

// 路由处理交个vue
app.get('*', async (req, res) => {
  try {
    // 异步方法，返回promise
    const context = {
      url: req.url,
      title: 'ssr test'
    }
    const html = await renderer.renderToString(context)
    console.info(html)
    res.send(html)
  } catch(err) {
    console.info(err)
    res.status(500).send('服务器内部错误' + err)
  }
})

app.listen(3000, () => {
  console.info('server start！ http://localhost:3000')
})