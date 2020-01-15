const userModel = require('../models/user')
// const jwt = require('jsonwebtoken')
const secret = require('../config/secret.json')
// const bcrypt = require('bcryptjs')

class UserController {
  /**
   * 登录
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async postLogin(ctx) {
    const data = ctx.request.body
    const user = await userModel.findUserByName(data.name)  // 查询用户
    console.log('登录 查询厚的用户信息', user);

    // 判断用户是否存在
    if (user) {
      // 判断前端传递的用户密码是否与数据库密码一致
      if (data.name == user.name && data.password == user.password) {
        // 用户token
        const userToken = {
          name: user.name,
          id: user.id
        }
        // const token = jwt.sign(userToken, secret.sign, {expiresIn: '1h'})  // 签发token
        ctx.body = {
          message: '成功',
          userToken,
          code: 1
        }
      } else {
        ctx.body = {
          code: -1,
          message: '用户名或密码错误'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        message: '用户名不存在'
      }
    }
  }

  /**
   * 创建用户
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async createUser(ctx) {
    const user = ctx.request.body
    console.log('user', user);

    if (user.password && user.name) {
      const existUser = await userModel.findUserByName(user.name)
      console.log('existUser', existUser);

      if (existUser) {
        ctx.body = {
          code: -1,
          message: '用户名已经存在'
        }
      } else {
        // 密码加密
        // const salt = bcrypt.genSaltSync()
        // const hash = bcrypt.hashSync(user.password, salt)
        // user.password = hash
        await userModel.createUser(user)
        const newUser = await userModel.findUserByName(user.name)

        // 签发token
        // const userToken = {
        //   name: newUser.name,
        //   id: newUser.id
        // }
        // const token = jwt.sign(userToken, secret.sign, {expiresIn: '1h'})

        ctx.body = {
          code: 1,
          message: '创建成功',
          // bean: {
          //   token
          // }
        }
      }
    } else {
      ctx.body = {
        code: -1,
        message: '参数错误'
      }
    }
  }

  /**
   * 获取用户信息
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getUserName(ctx) {
    const user = ctx.user
    if (user) {
      ctx.body = {
        code: 1,
        message: '成功',
        user
      }
    } else {
      ctx.body = {
        code: -1,
        message: '获取用户信息失败'
      }
    }

  }
}

module.exports = UserController

