<template>
  <div id="container">
    Hello World!
    <div>
      <input type="text" placeholder="id"><br>
      <input type="text" placeholder="pw"><br>
      <button>submit</button>
      <button>register</button>
      <label @click.prevent="naverLogin()">네이버 로그인</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    naverLogin () {
      console.log('go to naver')
      /* https://nid.naver.com/oauth2.0/authorize?client_id=fsL4vVVgvsoOwkPoWPO4&response_type=code&redirect_uri=http%3a%2f%2flocalhost%3a8080%2f&state=200
      */
    }
  }
}
</script>

<style scoped>
#container {

}
</style>
