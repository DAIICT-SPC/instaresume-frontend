<template>
<div id="dashboard">
  <navbar :user="user"></navbar>
  <sidebar :resume="resume"></sidebar>
  <resume-template :resume="resume"></resume-template>
  <div class="error-notification notification" v-if="error" @click="error = false">
    <p>
      Something went wrong. Please try again!
    </p>
    <br />
    <small>Click to Close</small>
  </div>
  <div class="success-notification notification" v-if="resumeSynced" @click="resumeSynced = false">
    <p>
      Your resume was updated successfully.
    </p>
    <br />
    <small>Click to Close</small>
  </div>
  <div class="success-notification notification" v-if="!notificationIsRead" @click="markNotificationAsRead">
    <b>New Updates</b>
    <br />
    <p>
      Blocks inside the Education, Professional Experience/Internships and Projects tabs can be re-ordered via drag and drop.
    </p>
    <br />
    <small>Click to Close</small>
  </div>
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
    this.$bus.$on('sync-resume', () => {
      let dashboardState = this;
      let bus = this.$bus;
      // Sync Resume Data
      this.syncResumeData(() => {
        bus.$emit('resume-synced', {});
        dashboardState.resumeSynced = true;

        setTimeout(() => {
          dashboardState.resumeSynced = false;
        }, 6000);
      });
    });

    this.$bus.$on('generate-resume', () => {
      // Generate Resume
      this.generateResume(this.resume);
    });

    this.$bus.$on('generate-resume-error', (errors) => {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 6000);
    });

    // Fetch resume from firebase
    Database.resumes.get(this.user.id, (resume) => {
      if (resume) {
        Utils.mergeResume(this.resume, resume);
      }
    });

    // Fetch unread notifications from firebase
    Database.notifications.get(this.user.id, (isRead) => {
      if (isRead != null && isRead == true)
        this.notificationIsRead = true;
      else
        this.notificationIsRead = false;
    });
  },

  data() {
    return {
      resume: resumeData,
      error: false,
      resumeSynced: false,
      notificationIsRead: false
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
    markNotificationAsRead() {
      // Mark notification as read
      Database.notifications.markAsRead(this.user.id, () => {
        this.notificationIsRead = true;
      });
    },
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
