const Koa = require('koa')
const cors = require('koa2-cors')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const router = require('./server/routes/index')
const path = require('path'),
  serve = require('koa-static')
const jwt = require('koa-jwt')
const secret = require('./server/config/secret.json')
const err = require('./server/middlreware/error')
const app = new Koa()
app.use(cors())
app.use(err())
app.use(logger())
app.use(bodyParser())
app.use(function*(next) {
  let start = new Date()
  yield next
  let ms = new Date() - start
  console.log('%s %s - %s', this.method, this.url, ms) // 显示执行的时间
})
app.use(
  jwt({ secret: secret.sign }).unless({
    path: [/^\/api\/login/, /^\/api\/createUser/]
  })
)
app.use(router.routes()).use(router.allowedMethods())
app.use(serve(path.resolve('dist'))) // 将webpack打包好的项目目录作为Koa静态文件服务的目录

app.listen(9528, () => {
  console.log(`server running success....`)
})
