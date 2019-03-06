<template>
  <div class="home_decoration_rent_box">
    <v-header></v-header>
    homeDecorationRent
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
export default {
  name: 'HomeDecorationRent',
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style lang="less">

</style>
