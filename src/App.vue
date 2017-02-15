<template>
<div id="app">
  <component :is="currentView"></component>
</div>
</template>

<script>
import Splash from './Splash'
import Dashboard from './Dashboard'

export default {
  name: 'app',

  created () {
    this.$bus.$on('user-authenticated', (user) => {
        this.currentView = Dashboard;
    })
  },

  data () {
    return {
        currentView: Splash
    }
  }
}
</script>

<style lang="scss">
// Import the application styling
@import "./scss/app";

</style>
