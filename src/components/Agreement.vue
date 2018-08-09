<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Agreement',
  data () {
    return {
      access_token: ''
    }
  },
  methods: {
  },
  created () {
    this.access_token = this.$route.query.token
    console.log(this.access_token)
    this.$router.push('/')
  }
}
</script>
