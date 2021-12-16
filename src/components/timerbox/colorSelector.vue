<template>
  <div class="changeColor">
        <b-field horizontal label="Selectcolor">
           <b-input v-model="colorValue" placeholder="Type Color"> </b-input>
        </b-field>
      </div>
</template>

<script>
export default {
  name: 'colorValueSelector',
  computed: {
    colorValue: {
      get () {
        return this.$store.state.colorValue
      },
      set (NewValue) {
        this.$store.dispatch('setColorValue', NewValue)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.changeColor{
    position: absolute;
  bottom:5%;
  left:20%;
  font-size: 1rem;
}

</style>
