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
    // User Logged in
    this.$bus.$on('user-authenticated', (user) => {
        this.user = user;
        this.currentView = Dashboard;
    });

    // User Logged out
    this.$bus.$on('user-logged-out', () => {
        this.currentView = Splash;
    });
  },

  data () {
    return {
        currentView: Splash,
        user: {}
    }
  }
}
</script>

<style lang="scss">
// Import the application styling
@import "./scss/app";

</style>
