# todolist

> vue2.X + vue-router + koa2 + mysql + sequelize + jwt = todoList
> 功能包括：登陆，注册，一个包括增删改查的 list

- 启动服务 npm run server
- 启动项目 npm run dev
  > 路由修改为 hash

# 改造

- nodemon 自动监听服务 有改变自更新
- 暂时删除 token 模块 改为 localstorage

## 引用

[全栈开发实战：用 Vue2+Koa1 开发完整的前后端项目（更新 Koa2）](https://molunerfinn.com/Vue+Koa/)

### 说明

0. const baseUrl= process.env.NODE_ENV == "development"? "http://192.168.8.36:9528/mysql/dist": "http://47.105.191.153:8899/mysql/dist"

1. 本地开发 检测接口 9528 服务器改为 8899
1. 不需要 proxy 代理了 调整了相关代码
1.

### 整体结构展示

```
数据库操作
scheme.js 数据库模块Sequelize
db.js 数据库连接Sequelize
models.js  引入数据库模块和链接 具体操作数据库返回对应数据

koa操作
router.js
引入数据库模型
引入koa-router
router
            .post('url',  async fn(ctx) {  ctx.request.query  查询数据库 await  返回 ctx.body={}  })
            .get('url',     controllers模块分离)
module.exports=

app.js
require koa
koa.use(router)
```
