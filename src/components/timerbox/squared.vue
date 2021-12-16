<template>
    <b-field horizontal class="counter-squared" label="Squared:">
      <span>
        {{$store.state.counter}}
        <sup>2</sup> =
        {{$store.getters.counterSquared}}
      </span></b-field>
</template>

<script>
export default {
  name: 'squared'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.counter-squared{
  position: absolute;
  bottom:30%;
  left:35%;
  font-size: 1rem;
}

</style>
