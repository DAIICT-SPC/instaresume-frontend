<template>
<div id="dashboard">
  <sidebar :student="student"></sidebar>
  <resume-template :student="student"></resume-template>
</div>
</template>

<script>
import Sidebar from './components/Sidebar'
import ResumeTemplate from './components/ResumeTemplate'
import studentData from './models/student';

export default {
  name: 'dashboard',

  data () {
    return {
        student: studentData
    }
  },

  components: {
    Sidebar,
    ResumeTemplate
  }
}
</script>

<style lang="scss">
// Import the application styling
@import "./scss/app";

</style>
