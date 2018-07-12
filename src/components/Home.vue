<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <ul>
      <li>
        <h2>Play game!</h2>
      </li>
      <hr>
      <li>
        <h3>More Detail</h3>
      </li>
    </ul>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
