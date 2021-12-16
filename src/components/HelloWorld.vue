<template>
  <div>
    <b-button @click="openmessage" rounded type="is-dark">useless button press me</b-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    openmessage () {
      alert('pressed a uselessbutton go to about to see the main content')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
