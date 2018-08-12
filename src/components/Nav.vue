<template>
  <div id="container">
    <div id="main-tab">
      <router-link to="/">
        <img src="../assets/logo.png" width="30px" alt="logo" />
        <div id="logo-tab">
          toyProject :: Web Tetris Site
        </div>
      </router-link>
      <div id="social-tab">
        친구 / 쪽지 / 알림
      </div>
      <div id="login-tab">
        <div v-if="LoginStatus === false">
          <router-link to="login">Login</router-link>
        </div>
        <div v-if="LoginStatus === true">
          <router-link to="logout">로그아웃</router-link>
        </div>
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
  data () {
    return {
      LoginStatus: false
    };
  }
};
</script>

<style scoped>
#container {
  background-color: #20232a;
  color: white;
  width: 100%;
  position: fixed;
  top: 0px;
  height: 55px;
  z-index: 1;
}

#main-tab {
}

#logo-tab, #social-tab, #login-tab, #game-start-tab {
  display: inline-block;
  margin-left: 10px;
}

#logo-tab:hover {
  color: #61dafb;
}

#social-tab {
  margin-left: 40%;
}

#login-tab {
  background-color: gray;
  padding: 5px;
}
#login-tab:hover {
  background-color: deepskyblue;
  padding-bottom: 10px;
  padding-top:10px;
}

#game-start-tab {
  background-color: gray;
  padding: 5px;
}

#game-start-tab:hover {
  background-color: deepskyblue;
  padding-bottom: 10px;
  padding-top:10px;
}

a {
  color: white;
  text-decoration-line: none;
}
</style>
