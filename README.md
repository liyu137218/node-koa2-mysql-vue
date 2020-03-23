# todolist

> vue2.X + vue-router + koa2 + mysql + sequelize + jwt = todoList
> 功能包括：登陆，注册，一个包括增删改查的 list

启动服务 npm run server
启动项目 npm run dev
路由修改为 hash

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

#run server at localhost:9527
```

# 改造

- nodemon 自动监听服务 有改变自更新
- 暂时删除 token 模块 改为 localstorage

## 需要进一步掌握的东西

1. mysql 和 sequelize 之间的操作
2. 结构划分
3. 代理 反代理 接口

## 引用

[全栈开发实战：用 Vue2+Koa1 开发完整的前后端项目（更新 Koa2）](https://molunerfinn.com/Vue+Koa/)

### 说明

0. const baseUrl= process.env.NODE_ENV == "development"? "http://192.168.8.36:9528/mysql/dist": "http://47.105.191.153:8899/mysql/dist"

1. 本地开发 检测接口 9528 服务器改为 8899
1. 不需要 proxy 代理了 调整了相关代码
1.
