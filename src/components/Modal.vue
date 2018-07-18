<template>
  <div id="container">
    <label id="close" @click="close()">X</label>
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
  },
  created () {
    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 32) {
        //  space-bar
        console.log('no')
      } else if (event.keyCode === 38) {
        //  up
      } else if (event.keyCode === 40) {
        //  down
      }
    })
  }
}
</script>

<style scoped>
#close{
  float: right; margin-right: 3%; margin-top: 1%; color: white; font-size: 80px;
}
#close:hover{
  color: #00B7FF;
}
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
