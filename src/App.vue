<template>
  <div id="app">
    <the-header/>
    <the-sider/>
    <div class="page">
      <router-view :key="key"/>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import TheSider from './components/TheSider'
export default {
  name: 'App',
  components: {TheSider, TheFooter, TheHeader},
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/app.scss";
</style>
