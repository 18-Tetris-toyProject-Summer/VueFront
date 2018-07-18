<template>
  <div id="container">
    <div style="width: 100%; ">
      <div style="position: absolute; width: 100%">
        <img id="fade-img" src="../assets/2.jpg" alt="first image" >
      </div>
      <h1 style="position: relative; margin-top: 0; margin-bottom:100%; padding-top: 20%;">Join us? </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome Box'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  width: 100%;
}
#first-list, #second-list, #third-list {

}
#fade-img{
  animation: fadeImg 1.5s;
}
@keyframes fadeImg {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

img{
  width: 100%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
li {
  margin: 0px;
  padding: 0px;
}
a {
  color: #42b983;
}
</style>
