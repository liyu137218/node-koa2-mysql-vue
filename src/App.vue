<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h2>李瑜初探全栈</h2>
    <p>1如何搭建/连接/操作数据库</p>
    <p>2部署接口,接收和返回信息</p>
    <p>3域名/端口</p>
    <p>vue2.X + vue-router + koa2 + mysql + sequelize</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.mb-20 {
  margin-bottom: 20px;
}

.wd-full {
  width: 100%;
}

.text-justify {
  text-align: justify;
}
</style>
