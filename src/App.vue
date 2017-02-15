<template>
<div id="app">
  <splash v-if="!userIsLoggedIn"></splash>
  <dashboard :user="user" v-if="userIsLoggedIn"></dashboard>
</div>
</template>

<script>
import Splash from './Splash'
import Dashboard from './Dashboard'

export default {
  name: 'app',

  created() {
    // User Logged in
    this.$bus.$on('user-authenticated', (user) => {
      this.user = user;
    });

    // User Logged out
    this.$bus.$on('user-logged-out', () => {
      this.user = null;
    });
  },

  data() {
    return {
      user: null
    }
  },

  computed: {
      userIsLoggedIn () {
          return this.user !== null;
      }
  },

  components: {
      Splash,
      Dashboard
  }
}
</script>

<style lang="scss">
// Import the application styling
@import "./scss/app";</style>
