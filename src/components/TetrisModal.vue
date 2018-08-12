<template>
  <div id="container">
    <label id="close" @click="close()">X</label>
    <h1>:: 방 이름 ::</h1>
    <div id="main">
      <table id="tetris-board-rival">
        <!-- TODO Rival GameOverFlag Animation-->
        <!--<tr v-if="gameOverFlag === true">-->
          <!--<td>-->
            <!--Dead-->
          <!--</td>-->
        <!--</tr>-->
        <tr v-for="(iv, ik) in (tetrisBoardRival.length - 1)" :key="ik" style="height: 1px">
          <td v-for="(jv, jk) in tetrisBoardRival[ik]" :key="jk" style="height: 1px">
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
      <div id="info-box">
        <h2>sore: {{myScore}}</h2>
        <br>
        <h2 style="width: 140px">{{gameOverFlag ? 'gameOver' : 'play!'}}</h2>
        <img src="../assets/iu.jpg" alt="">
      </div>
      <table id="next-tetris">
        <tr v-for="(iv, ik) in (nextTetrisBoard.length - 1)" :key="ik">
          <td v-for="(jv, jk) in nextTetrisBoard[ik]" :key="jk">
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
      <table v-if="gameOverFlag === false" id="tetris-board-me">
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
      <table v-else-if="gameOverFlag === true" id="tetris-board-me">
        <tr v-for="(iv, ik) in (tetrisBoard.length - 1)" :key="ik">
          <td v-for="(jv, jk) in tetrisBoard[ik]" :key="jk" style="opacity: 0.5">
            <div v-if="jv === 1" style="background: red;">0</div>
            <div v-else-if="jv === 2" style="background: orange;">0</div>
            <div v-else-if="jv === 3" style="background: yellow;">0</div>
            <div v-else-if="jv === 4" style="background: green;">0</div>
            <div v-else-if="jv === 5" style="background: blue;">0</div>
            <div v-else-if="jv === 6" style="background: mediumpurple;">0</div>
            <div v-else-if="jv === 7" style="background: purple;">0</div>
            <div v-else>0</div>
          </td>
        </tr>
      </table>
    </div>
    <div id="chat-box">
      <div id="chat-box-user-list">
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          <li>User 4</li>
      </div>
      <div id="chat-box-message">
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ 채팅치는중~~ 채팅치는중~~ 채팅치는중~~ 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
        User1 : 채팅치는중~~ <br>
      </div>
      <div id="chat-box-input">
        <input type="text">
      </div>
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      tetrisBoardRival: [
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      nextTetrisBoard: [
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [0]
      ],
      tetrisData: [
        [ 0x4C40, 0x0E40, 0x4640, 0x4E00 ], // 'T'
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
      nextType: 0,
      nextColor: 0,
      curRotation: 0,
      curType: 0,
      curColor: 0,
      maxY: 0,
      minY: 10,
      breakFlag: false,
      myScore: 0,
      gameOverFlag: false
    };
  },
  watch: {
    // curPosition: {
    //   handler: function (after, before) {
    //     //  TODO X, Y 값 충돌 체크후 멈추기, 한줄 삭제 +
    //     // if (after.x === 5) console.log('wow!')
    //   },
    //   deep: true
    // }
  },
  methods: {
    close () {
      this.$EventBus.$emit('close');
    },
    checkLine () {
      let checkPoint = 0;
      let multiPoint = 0;
      for (let i = 1; i < 20; i++) {
        for (let j = 0; j < 10; j++) {
          if (this.tetrisBoard[i][j] !== 0 && this.tetrisBoard[i][j] !== '.') {
            checkPoint++;
          }
          if (checkPoint === 10) {
            this.tetrisBoard.splice(i, 1);
            this.tetrisBoard.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            multiPoint++;
          }
        }
        checkPoint = 0;
      }
      //  TODO multiPoint score++
      this.myScore += multiPoint;
    },
    initTetrino () {
      this.curType = this.nextType;
      this.curColor = this.nextColor;
      this.nextColor = Math.floor(Math.random() * (8 - 1)) + 1;
      this.nextType = Math.floor(Math.random() * (8 - 1));
      this.curPosition.x = 0;
      this.curPosition.y = 4;
      this.paintingNextTetrino();
    },
    paintingNextTetrino () {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (j < 3) {
            this.nextTetrisBoard[i + 1][j + 1] = 0;
          }
          if (this.tetrisData[this.nextType][0] & (0x8000 >> i * 4 + j)) {
            this.nextTetrisBoard[i + 1][j + 1] = this.nextColor;
          }
        }
      }
    },
    painting (value) {
      for (let i = 0; i < 4; i++) {
        if (this.breakFlag) {
          break;
        }
        for (let j = 0; j < 4; j++) {
          //  FIXME 고정되어 있는 배경에 부딛혔을 때 처리해줘야 함.
          if (this.tetrisData[this.curType][this.curRotation] & (0x8000 >> i * 4 + j)) {
            if (value === 'isCrash' || value === 'isCrashFirst') {
              if ((this.tetrisBoard[this.curPosition.x + i][this.curPosition.y + j] !== 0 &&
                this.tetrisBoard[this.curPosition.x + i][this.curPosition.y + j] !== '.') ||
                this.curPosition.x + i + 1 === 21) {
                this.breakFlag = true;
                if (this.curPosition.x === 1 && value === 'isCrashFirst') {
                  this.gameOverFlag = true;
                  this.stopGame();
                  // this.gameOverFlag = false
                }
                break;
              }
            } else if (value) {
              this.tetrisBoard[this.curPosition.x + i][this.curPosition.y + j] = value;
            }
            if (this.maxY < this.curPosition.y + j) this.maxY = this.curPosition.y + j;
            if (this.minY > this.curPosition.y + j) this.minY = this.curPosition.y + j;
          }
        }
      }
    },
    paintTetris (value) {
      this.maxY = 0;
      this.minY = 10;
      this.painting('.');
      if (value === 38) { //  Up
        this.curRotation = (this.curRotation + 1) % 4;
        this.painting('isCrash');
        //  FIXME 제일 우축일때 회전이 부자연 스러움.
        if (this.maxY > 9 || this.minY < 0 || this.breakFlag === true) {
          this.curRotation = (this.curRotation - 1) % 4;
          if (this.curRotation === -1) this.curRotation = 3;
          this.breakFlag = false;
          this.painting(this.curColor);
        }
      } else if (value === 37 && this.minY > 0) { //  Left
        this.curPosition.y--;
        this.painting('isCrash');
        if (this.breakFlag === true) {
          this.breakFlag = false;
          this.curPosition.y++;
        }
      } else if (value === 39 && this.maxY < 9) { //  Right
        this.curPosition.y++;
        this.painting('isCrash');
        if (this.breakFlag === true) {
          this.breakFlag = false;
          this.curPosition.y--;
        }
      } else if (value === 40) { //  Down
        this.curPosition.x++;
        this.painting('isCrashFirst');
        if (this.breakFlag === true) {
          //  TODO 게임오버 멈추는 로직
          this.curPosition.x--;
          this.breakFlag = false;
          this.painting(this.curColor);
          this.checkLine();
          this.initTetrino();
        }
      } else if (value === 32) { // Space-bar
        while (true) {
          //  FIXME 최선인가? 한번에 내려서 확인하자
          this.curPosition.x++;
          this.painting('isCrashFirst');
          if (this.breakFlag === true) {
            this.curPosition.x--;
            this.breakFlag = false;
            this.painting(this.curColor);
            this.checkLine();
            this.initTetrino();
            break;
          }
        }
      }
      this.painting(this.curColor);
      this.tetrisBoard[20].push(1);
    },
    keydownEvent (event) {
      this.paintTetris(event.keyCode);
    },
    startGame () {
      this.nextColor = Math.floor(Math.random() * (8 - 1)) + 1;
      this.nextType = Math.floor(Math.random() * (8 - 1));
      this.initTetrino();
      this.painting(this.curColor);
      this.gameflag = setInterval(() => {
        //  한 줄씩 떨어지게 만든다.
        this.paintTetris(40);
      }, 1000);
    },
    stopGame () {
      window.removeEventListener('keydown', this.keydownEvent);
      clearInterval(this.gameflag);
    }
  },
  created () {
    //  FIXME 채팅후 모두 레디되면 시작 이런거
    window.addEventListener('keydown', this.keydownEvent);
    this.startGame();
  },
  destroyed () {
    this.stopGame();
  }
};
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
  margin-top: 30px;
}
#next-tetris{
  float: left;
  width: 6%;
  margin-left: 2%;
  background-color: black;
  border-collapse: collapse;
}
#next-tetris td{
  border:1px solid white;
}
#tetris-board-me{
  float: left;
  margin-left: 2%;
  width: 15%;
  background-color: black;
  border-collapse: collapse;
}
#tetris-board-me td{
  border:1px solid white;
}
#info-box{
  float: left;
  margin-left: 2%;
}
#info-box img{
  width: 100px;
}
#info-box h2{
  color: greenyellow;
  background: rgb(0, 0, 0, 0.3);
}
#chat-box{
  padding: 0;
  float: left;
  margin-left: 2%;
  width: 35%;
  border:1px solid white;
  background: rgb(50, 50, 150, 0.6);
}
#chat-box-message{
  text-align: left;
  display: inline-block;
  margin: 0;
  padding-left: 0.7em;
  width: 79%;
  border-left: 1px solid white;
}
#chat-box-user-list{
  float: left;
  margin-top: 10px;
  width: 18%;
}
#chat-box-user-list ul, li{
  margin: 5px;
  padding: 0;
}
#chat-box-input input{
  width: 100%;
  border: 1px solid white;
}
#tetris-board-rival{
  float: left;
  margin-left: 5%;
  width: 15%;
  background-color: black;
  border-collapse: collapse;
}
#tetris-board-rival td{
  border:1px solid white;
}
</style>
