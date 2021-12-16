<template>
   <div class="timerbox">
      <h2 class="headerText">Timerfunction</h2>
      <innput/>
      <squared/>
      <buttons/>
    <colorselector/>
    </div>
</template>

<script>
import squared from '@/components/timerbox/squared.vue'
import buttons from '@/components/timerbox/buttons.vue'
import colorselector from '@/components/timerbox/colorSelector.vue'
import innput from '@/components/timerbox/input.vue'

export default {

  components: { buttons, colorselector, squared, innput },
  name: 'timerBoxComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.headerText{
font-size: 2rem;
}
.timerbox {
position: relative;
margin-top: 10rem;
border: 5px solid black;
max-width: 40%;
height: 40vh;
}
</style>
