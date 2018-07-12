<template>
  <div id="container">
    <label @click="close()" style="float: right; margin-right: 3%; margin-top: 1%; color: white; font-size: 80px">X</label>
    <div id="main">
      <img src="../assets/iu.jpg" alt="iu" width="50%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close () {
      this.$EventBus.$emit('close')
    }
  }
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(0, 0, 0, 0.6);
  z-index: 100;
  top: 0;
}
#main{
  margin-top: 55px;
}
</style>
