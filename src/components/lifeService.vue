<template>
  <div class="life_service_box">
    <v-header></v-header>
    LifeService
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
export default {
  name: 'LifeService',
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style lang="less">

</style>
