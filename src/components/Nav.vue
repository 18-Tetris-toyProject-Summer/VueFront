<template>
  <div id="container">
    <div id="main-tab">
      <div id="logo-tab">
        <router-link to="/">
        <img src="../assets/iu.jpg" width="100px" alt="logo"/>
        toyProject :: Web Tetris Site
        </router-link>
      </div>
      <div id="social-tab">
        친구 / 쪽지 / 알림
      </div>
      <div id="login-tab">
        <router-link to="login">Login</router-link>
      </div>
      <div id="game-start-tab">
        <router-link to="roomlist">Start</router-link>
      </div>
    </div>
    <div id="sub-tab">
      <router-link to="/">홈</router-link>
       / 상점 / 랭킹보드 / 커뮤니티
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    login () {
      console.log('hi')
    }
  }
}
</script>

<style scoped>
#container {
  background-color: deepskyblue;
  color: white;
  width: 100%;
}
#main-tab {
}
#logo-tab, #social-tab, #login-tab, #game-start-tab {
  margin: 10px;
  padding: 5px;
  display: inline-block;
}
#logo-tab {
}
#social-tab {
}
#login-tab {
  background-color: midnightblue;
}
#game-start-tab{
  background-color: midnightblue;
}
#sub-tab {
  background-color: midnightblue;
  padding-top: 5px;
  padding-left: 20px;
  padding-bottom: 5px;
  font-size: 14px;
  color: white;
  text-align: left;
}
a {
  color: white;
  text-decoration-line: none;
}
</style>
