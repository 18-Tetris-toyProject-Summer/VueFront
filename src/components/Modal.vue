<template>
  <div id="container">
    <label id="close" @click="close()">X</label>
    <div id="main">
      <h1>:: 방 이름 ::</h1>
      <table id="tetris-me">
        <tr v-for="(iv, ik, i) in (tetrisData.length - 1)" :key="ik">
          <td v-for="(jv, jk, j) in tetrisData[ik]" :key="jk">
            <div v-if="jv === 1">1</div>
            <div v-else>.</div>
          </td>
        </tr>
      </table>
      <img src="../assets/iu.jpg" style="width: 10%;" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      gameflag: 0,
      tetrisData: [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      testValue: 0
    }
  },
  watch: {
    tetrisData () {
        console.log('paint!')
    },
    testValue (e) {
      if (e === 10) {
        console.log('break')
        clearInterval(this.gameflag)
      }
    }
  },
  methods: {
    close () {
      this.$EventBus.$emit('close')
    },
    keyupEvent (event) {
      if (event.keyCode === 32) {
        //  space-bar
      } else if (event.keyCode === 38) {
        //  up
        this.stopGame()
      } else if (event.keyCode === 40) {
        //  down
      }
    },
    startGame () {
      this.gameflag = setInterval(() => {
        //  한 줄씩 떨어지게 만든다.
        this.tetrisData[this.testValue][1] = 1
        this.testValue++
        this.tetrisData[19].push(1)
      }, 1000)
    },
    stopGame () {
      window.removeEventListener('keyup', this.keyupEvent)
      clearInterval(this.gameflag)
    },
    drawTetrisTable () {
    }
  },
  created () {
    window.addEventListener('keyup', this.keyupEvent)
    this.startGame()
  },
  destroyed () {
    this.stopGame()
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
  color: white;
}
#main{
  margin-top: 55px;
}
#tetris-me{
  position: fixed;
  margin-left: 20%;
  width: 20%;
  background-color: black;
  border-collapse: collapse;
}
#tetris-me td{
  border:1px solid white;
}
</style>
