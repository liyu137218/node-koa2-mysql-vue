const Router = require('koa-router')
const UserController = require('../controllers/user')
const ListController = require('../controllers/list')
const router = new Router()

router
  .post('/mysql/dist/api/login', UserController.postLogin) // 登录
  .post('/mysql/dist/api/createUser', UserController.createUser) // 注册
  .get('/mysql/dist/api/userInfo', UserController.getUserName) // 获取用户信息
  .get('/mysql/dist/api/user/getTodoList', ListController.getTodoList) // 获取list
  .post('/mysql/dist/api/user/todoList', ListController.createTodoList) // 创建list
  .post('/mysql/dist/api/user/DestroyTodoList', ListController.destroyTodoList) // 删除list
  .post('/mysql/dist/api/user/updateTodoList', ListController.updateTodoList) // 更新list

module.exports = router
