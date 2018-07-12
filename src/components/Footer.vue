<template>
  <div id="container">
    <div id="left-contents">
      left side contents
    </div>
    <div id="center-contents">
      center contents
    </div>
    <div id="right-contents">
      right side contents
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#container {
  background-color: deepskyblue;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0px;
}
#left-contents, #center-contents, #right-contents {
  padding: 10px;
  margin: 10px;
  display: inline-block;
}
</style>
