<template>
  <div id="sub-tab">
    <router-link to="/">홈 </router-link>/
    <router-link to="/"> 상점 </router-link>/
    <router-link to="/"> 랭킹보드 </router-link>/
    <router-link to="/"> 커뮤니티 </router-link>
  </div>
</template>

<script>
export default {
  name: 'SubNav'
};
</script>

<style scoped>
#sub-tab {
  margin-top: 55px;
  background-color: #777788;
  padding-top: 5px;
  padding-left: 15%;
  padding-bottom: 5px;
  font-size: 14px;
  color: white;
  text-align: left;
}

a {
  color: white;
  text-decoration-line: none;
}
a:hover{
  color: #61dafb;
}
</style>
