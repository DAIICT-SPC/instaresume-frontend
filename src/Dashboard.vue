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
import userData from './models/user'
import Database from './service/database'
import Utils from './utils'

export default {
  name: 'dashboard',

  created() {
    this.$bus.$on('generate-resume', () => {
      this.syncResumeData(this.generateResume);
    });

    // Fetch resume from firebase
    Database.resumes.get(this.user.id, (resume) => {
      if (resume) {
        this.resume = resume;
      }
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
      default: userData
    }
  },

  methods: {
    syncResumeData(fn) {
      // Sync resume data
      // then generate it.
      Database.resumes.create(this.user.id, this.resume, fn);
    },
    generateResume(resume) {
      const bus = this.$bus;
      const userData = this.user;
      const userID = userData.id;

      window.axios.post('/generate', {
          resume: resume,
          user_id: userID
        })
        .then((response) => {
          const data = response.data;
          bus.$emit('resume-generated', data);

          return data;
        })
        .then((data) => {
          Utils.downloadFile(data.url, "Resume-" + userData.name);
        })
        .catch((error) => {
          bus.$emit("generate-resume-error", error.response.data);
        });
    }
  }

}
</script>

<style lang="scss">
// Import the application styling
@import "./scss/app";</style>
