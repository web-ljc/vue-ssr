import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Detail from '@/components/Detail'

Vue.use(Router)

// 每次用户请求都要创建router实例，避免全局污染
export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', component: Index},
      {path: '/detail', component: Detail},
    ]
  })
}