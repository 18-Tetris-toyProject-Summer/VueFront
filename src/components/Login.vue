<template>
  <div id="container">
    Hello World!<br>
    You can only do it this way. <p></p>
    <div>
      <a :href=apiURL><img src='../assets/naver_login.png'/></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      CLIENT_ID: 'fsL4vVVgvsoOwkPoWPO4',
      redirectURI: 'http%3a%2f%2flocalhost%3a8081%2flogin',
      //  FIXME state 값 random string 으로 변경
      state: 123,
      apiURL: 'https://nid.naver.com/oauth2.0/authorize?response_type=code'
    }
  },
  methods: {
    naverLogin () {
      // console.log('go to naver')
    }
  },
  created () {
    this.apiURL += '&client_id=' + this.CLIENT_ID
    this.apiURL += '&redirect_uri=' + this.redirectURI
    this.apiURL += '&state=' + this.state
  }
}
</script>

<style scoped>
#container {
  margin-top: 10%;
  margin-bottom: 20%;
}
img {
  width: 300px;
}
img:hover {
  opacity: 0.8;
}
</style>
