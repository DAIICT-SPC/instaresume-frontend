<template lang="html">
  <div id="splash" class="splash">
      <div class="intro">
          <a href="index.html" class="logo">
              <img src="./assets/logo.svg" :alt="title" />
              <span>{{ title }}</span>
          </a>
          <!-- <p class="tagline">
              {{tagline}}
          </p> -->
          <p>
              <a class="button is-lighter is-large signin-button" type="button" @click="signIn">
                  <span :class="{'fa icon': true, 'fa-google': !isProcessing, 'fa-spinner fa-pulse fa-fw': isProcessing}"></span>
                  <span class="button-label">Sign in with Google</span>
              </a>
          </p>
      </div>
      <img src="./assets/resume.svg" alt="InstaResume" class="illustration">
  </div>
</template>

<script>
export default {
  name: 'splash',

  data() {
    return {
      title: "InstaResume",
      tagline: "Instant resume generator.",
      isProcessing: false
    };
  },

  methods: {
    signIn() {
      this.isProcessing = true;
      
      let user = {
        name: "Kunal Varma",
        uid: "123456789"
      };

      this.$bus.$emit("user-authenticated", user);
    }
  }

}
</script>
