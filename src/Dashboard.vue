<template>
<div id="dashboard">
  <navbar :user="user"></navbar>
  <sidebar :resume="resume"></sidebar>
  <resume-template :resume="resume"></resume-template>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ResumeTemplate from './components/ResumeTemplate'
import resumeData from './models/resume'

export default {
  name: 'dashboard',

  created() {
    this.$bus.$on('generate-resume', () => {
      this.generateResume();
    });
  },

  data() {
    return {
      resume: resumeData
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
