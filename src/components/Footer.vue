<template>
  <div id="container">
    <div id="left-contents">
      <img src="../assets/char.png" alt="character logo">
    </div>
    <div id="center-contents">
      center side contents <br>
      center side contents <br>
      center side contents <br>
      center side contents <br>
      center side contents <br>
      center side contents <br>
      center contents
    </div>
    <div id="right-contents">
      <a href="http://1ilsang.blog.me/">1ilsang-blog</a> |
      right side contents
    </div>
    <div>
    </div>
    <div id="end-contents">
      Copyright © 2018 HELLO WORLD!<br>
      Vue.js
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
#container {
  background-color: #20232a;
  color: white;
  position: relative;
  width: 100%;
  bottom: 0px;
}
#left-contents, #center-contents, #right-contents {
  padding: 10px;
  margin: 10px;
  display: inline-block;
}
#left-contents{
  margin-left: 0;
  margin-right: 10%;
}
#center-contents{
  margin-left: 10%;
  margin-right: 10%;
}
#end-contents {
  color: gray;
}
a{
  color: white;
  text-decoration-line: none;
}
a:hover{
  color: #61dafb;
}
</style>
