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
import User from './models/user'
import Utils from './utils'
import Database from './service/database'

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

      // Sign in Provider
      var provider = new firebase.auth.GoogleAuthProvider();
      // Authenticate
      firebase.auth().signInWithPopup(provider).then((result) => {
        // The signed-in user info
        return result.user;
      }).then((user) => {
        // Model User Data
        return Utils.createUserFromGoogleData(user);
      }).then((user) => {
        // Save user to the Database
        // and log in the user
        Database.users.create(user, (authUser) => {
          // User authenticated and modeled
          // Now, emit.
          this.$bus.$emit("user-authenticated", authUser);
        });
      }).catch((error) => {
        console.log(error);
      });
    }
  }

}
</script>
