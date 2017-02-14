<template>
<div id="app">
  <sidebar :student="student"></sidebar>
</div>
</template>

<script>
import Sidebar from './components/Sidebar'
import studentData from './models/student';

export default {
  name: 'app',

  data () {
    return {
        student: studentData
    }
  },

  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
// Import the application styling
@import "./scss/app";

</style>
