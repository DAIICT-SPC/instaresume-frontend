<template>
<div id="dashboard">
  <navbar :user="user"></navbar>
  <sidebar :student="student"></sidebar>
  <resume-template :student="student"></resume-template>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ResumeTemplate from './components/ResumeTemplate'
import studentData from './models/student'

export default {
  name: 'dashboard',

  created() {
    this.$bus.$on('generate-resume', () => {
      this.generateResume();
    });
  },

  data() {
    return {
      student: studentData
    }
  },

  components: {
    Navbar,
    Sidebar,
    ResumeTemplate
  },

  props: {
    user: {
      required: true,
      type: Object,
      default: {}
    }
  },

  methods: {
    generateResume() {
      const bus = this.$bus;

      window.axios.post('/generate', this.user)
        .then((response) => {
          bus.$emit('resume-generated', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

}
</script>

<style lang="scss">
// Import the application styling
@import "./scss/app";</style>
