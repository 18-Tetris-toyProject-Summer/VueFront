<template>
  <div id="container">
      <ul id="list">
        <li v-for="a in 5" :key="a">
          <label @click="$EventBus.$emit('open')">Room Number : {{a}}</label>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'RoomList'
}
</script>

<style scoped>
#list {
  margin-left: 35%;
  margin-right: 35%;
}
label {
  text-decoration-line: underline;

}
label:hover{
  color: red;
}
li {
  margin: 15px;
}
</style>
