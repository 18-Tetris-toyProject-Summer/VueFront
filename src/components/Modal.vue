<template>
  <div id="container">
    <label id="close" @click="close()">X</label>
    <div id="main">
      <h1>:: 방 이름 ::</h1>
      <table id="tetris-me">
        <tr v-for="(iv, ik) in (tetrisBoard.length - 1)" :key="ik">
          <td v-for="(jv, jk) in tetrisBoard[ik]" :key="jk">
            <div v-if="jv === 1" style="background: red;">.</div>
            <div v-else-if="jv === 2" style="background: orange;">.</div>
            <div v-else-if="jv === 3" style="background: yellow;">.</div>
            <div v-else-if="jv === 4" style="background: green;">.</div>
            <div v-else-if="jv === 5" style="background: blue;">.</div>
            <div v-else-if="jv === 6" style="background: mediumpurple;">.</div>
            <div v-else-if="jv === 7" style="background: purple;">.</div>
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
      //  https://codeincomplete.com/posts/javascript-tetris/
      tetrisBoard: [
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      tetrisData: [
        [ 0x4640, 0x0E40, 0x4C40, 0x4E00 ], // 'T'
        [ 0x8C40, 0x6C00, 0x8C40, 0x6C00 ], // 'S'
        [ 0x4C80, 0xC600, 0x4C80, 0xC600 ], // 'Z'
        [ 0x4444, 0x0F00, 0x4444, 0x0F00 ], // 'I'
        [ 0x44C0, 0x8E00, 0xC880, 0xE200 ], // 'J'
        [ 0x88C0, 0xE800, 0xC440, 0x2E00 ], // 'L'
        [ 0xCC00, 0xCC00, 0xCC00, 0xCC00 ] // 'O'
      ],
      curPosition: {
        x: 0,
        y: 4
      },
      gameflag: 0,
      curRotation: 0,
      curType: 0,
      curColor: 0,
      maxY: 0,
      minY: 10
    }
  },
  watch: {
    tetrisBoard () {
      //  console.log('paint!')
    },
    curPosition: {
      handler: function (after, before) {
        //  TODO X, Y 값 충돌 체크후 멈추기, 한줄 삭제 +
        // if (after.x === 5) console.log('wow!')
      },
      deep: true
    }
  },
  methods: {
    close () {
      this.$EventBus.$emit('close')
    },
    painting (value) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (this.tetrisData[this.curType][this.curRotation] & (0x8000 >> i * 4 + j)) {
            if (value) {
              this.tetrisBoard[this.curPosition.x + i][this.curPosition.y + j] = value
            }
            if (this.maxY < this.curPosition.y + j) this.maxY = this.curPosition.y + j
            if (this.minY > this.curPosition.y + j) this.minY = this.curPosition.y + j
          }
        }
      }
    },
    paintTetris (value) {
      this.maxY = 0
      this.minY = 10
      this.painting('.')
      if (value === 38) { //  Up
        this.curRotation = (this.curRotation + 1) % 4
        this.painting()
        //  FIXME 제일 우축일때 회전이 부자연 스러움.
        if (this.maxY > 9 || this.minY < 0) {
          this.curRotation = (this.curRotation - 1) % 4
        }
      } else if (value === 37 && this.minY > 0) { //  Left
        this.curPosition.y--
      } else if (value === 39 && this.maxY < 9) { //  Right
        this.curPosition.y++
      } else if (value === 40) { //  Down
        this.curPosition.x++
      }
      this.painting(this.curColor)
      this.tetrisBoard[19].push(1)
    },
    keydownEvent (event) {
      this.paintTetris(event.keyCode)
    },
    startGame () {
      let nextColor = Math.floor(Math.random() * (8 - 1)) + 1
      let nextType = Math.floor(Math.random() * (8 - 1))
      this.curType = nextType
      this.curColor = nextColor
      //  TODO Next에 그려줘야 함.
      this.painting(nextColor)
      this.gameflag = setInterval(() => {
        //  한 줄씩 떨어지게 만든다.
        this.paintTetris(40)
      }, 1000)
    },
    stopGame () {
      window.removeEventListener('keydown', this.keydownEvent)
      clearInterval(this.gameflag)
    }
  },
  created () {
    //  FIXME 채팅후 모두 레디되면 시작 이런거
    window.addEventListener('keydown', this.keydownEvent)
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
