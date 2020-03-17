/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import TodoList from '@/views/TodoList'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: TodoList,
      meta: {
        requireAuth: true // flag标识此路由需要登录
      }
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
// router.beforeEach((to,from,next) =>{
//   const token = localStorage.getItem('token');
//   if(to.path == '/'){ // 如果是跳转到登录页的
//     if(token != 'null' && token != null){
//       next('/todolist') // 如果有token就转向todolist不返回登录页
//     }
//     next(); // 否则跳转回登录页
//   }else{
//     if(token != 'null' && token != null){
//       next() // 如果有token就正常转向
//     }else{
//       next('/') // 否则跳转回登录页
//     }
//   }
// })
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = localStorage.getItem('token')
    if (token && token !== 'null') {
      // Bearer是JWT的认证头部信息
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
