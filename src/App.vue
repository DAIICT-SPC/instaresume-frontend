<template>
<div id="app">
  <sidebar></sidebar>
</div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
// Import the application styling
@import "./scss/app";

</style>
