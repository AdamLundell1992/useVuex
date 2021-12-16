<template>
  <span :style="{ color: $store.state.colorValue}" class="numberInput" >{{ $store.state.counter }}</span>
</template>

<script>
export default {
  name: 'input'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.numberInput{
  font-size: 3rem;
  position: absolute;
  bottom:50%;
  left:50%
}

</style>
