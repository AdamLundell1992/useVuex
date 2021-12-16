<template>
      <div class="buttons" >
        <b-button @click="$store.dispatch('increaseCounter')" rounded type="is-success">+</b-button>
        <b-button @click="$store.dispatch('decreaseCounter')" rounded type="is-danger">-</b-button>
      </div>
</template>

<script>
export default {
  name: 'Buttons'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.buttons{
  position: absolute;
  bottom: 12%;
  left: 43%;
}

</style>
