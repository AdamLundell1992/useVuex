<template>
  <div class="about">
    <h1 class="title">This is the time function with vuex</h1>
    <timerbox></timerbox>
  </div>
</template>

<script>
import timerbox from '@/components/timerbox.vue'

export default {
  name: 'About',
  data () {
    return {}
  },
  components: { timerbox }
}

</script>

<style lang="css" scoped>
.about{
text-align:-webkit-center ;
}

</style>
