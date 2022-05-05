## SSR
  - 将一个Vue组件再服务器端渲染为HTML字符串并发送到浏览器，最后将这些静态标记`激活`为可交互应用程序的过程，称为服务端渲染
  
  - 传统渲染技术，查库操作拼html返回
    - asp.net、 php、 jsp
  - spa渲染
    1. 首评渲染速度慢
    2. SEO不友好
  - ssr渲染
    - vue模版解析html，查库等异步操作
    1. 开发条件受限，比如服务端不支持声明周期
    2. 构建部署要求多，nodejs渲染
    3. 服务端负载变大

### vue ssr实现
  #### 创建工程
    > vue create ssr
  #### 安装依赖
  - 渲染器 vue-server-renderer
  - node服务器 express
  #### 编写服务端脚本
  #### 配置路由
    - vue项目配置路由，需要使用工厂函数创建新的router实例
    - 每次用户请求都要创建router实例，服务端渲染使用同一个实例会造成全局冲突。
    - 优化，页面缓存

### 构建
  #### 构建流程
  - source代码，经过webpack的build，生成server bundle 和client Bundle文件