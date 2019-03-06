<template>
  <div class="foot_mark_box">
    <v-header></v-header>
    footMark
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
export default {
  name: 'FootMark',
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style lang="less">

</style>
