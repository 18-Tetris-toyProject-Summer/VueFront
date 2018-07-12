<template>
  <div id="container">
    <label @click="close()" style="float: right; margin-right: 20px; margin-top: 10px; color: white; font-size: 40px">X</label>
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
  position: absolute;
  background: rgb(0, 0, 0, 0.6);
  z-index: 1;
}
#main{
  margin: 5px;
}
</style>
