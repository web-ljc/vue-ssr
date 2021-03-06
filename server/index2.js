// nodejs服务器
const express = require('express')
const Vue = require('vue')

// 创建express实例和vue实例
const app = express()
// 创建渲染器
const renderer = require('vue-server-renderer').createRenderer()

// 将来用渲染服务器page可以得到html内容
const page = new Vue({
  data: {title: '服务端开发'},
  template: '<div><h1>{{title}}</h1><div>hi, ssr</div></div>'
})

app.get('/', async (req, res) => {
  try {
    // 异步方法，返回promise
    const html = await renderer.renderToString(page)
    console.info(html)
    res.send(html)
  } catch(err) {
    res.status(500).send('服务器内部错误')
  }
})

app.listen(3000, () => {
  console.info('server start！ http://localhost:3000')
})