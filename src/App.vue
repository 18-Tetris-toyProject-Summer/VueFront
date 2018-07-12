<template>
  <div id="app">
    <Modal v-if="modalToggle"></Modal>
    <Nav/>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default {
  name: 'App',
  data () {
    return {
      modalToggle: false
    }
  },
  components: {
    Nav,
    Footer,
    Modal
  },
  created () {
    this.$EventBus.$on('close', () => {
      this.modalToggle = false
    })
    this.$EventBus.$on('open', () => {
      this.modalToggle = true
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
