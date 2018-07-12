<template>
  <div id="sub-tab">
    <router-link to="/">홈</router-link>
    / 상점 / 랭킹보드 / 커뮤니티
  </div>
</template>

<script>
export default {
  name: 'SubNav'
}
</script>

<style scoped>
#sub-tab {
  margin-top: 55px;
  background-color: #777788;
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
