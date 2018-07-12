<template>
  <div id="container">
    <div id="main-tab">
      <router-link to="/">
        <img src="../assets/iu.jpg" width="70px" alt="logo"/>
        <div id="logo-tab">
          toyProject :: Web Tetris Site
        </div>
      </router-link>
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
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
  }
}
</script>

<style scoped>
#container {
  background-color: #20232a;
  color: white;
  width: 100%;
  position: fixed;
  top: 0px;
  height: 55px;
}

#main-tab {
}

#logo-tab, #social-tab, #login-tab, #game-start-tab {
  display: inline-block;
}

#logo-tab {
}

#social-tab {
}

#login-tab {
  background-color: gray;
}

#game-start-tab {
  background-color: gray;
}

a {
  color: white;
  text-decoration-line: none;
}
</style>
