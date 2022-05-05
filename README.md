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
  #### 便写服务端脚本