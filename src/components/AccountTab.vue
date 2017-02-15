<template lang="html">
    <div class="account-tab" @click="toggle">
        <img :src="user.photoUrl" alt="user" />
        <span class="account-name">{{user.name}}</span>
        <span :class="{ 'fa icon': true, 'fa-chevron-down': !isOpen, 'fa-chevron-up': isOpen }"></span>

        <div class="account-dropdown" v-if="isOpen">
            <span>{{user.email}}</span>
            <a @click="logout">Logout</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'account-tab',

  data() {
    return {
      isOpen: false
    };
  },

  props: {
    user: {
      required: true,
      type: Object
    }
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },

    logout() {
      // Log user out
      firebase.auth().signOut().then(() => {
        // User logged out
        // Now, emit.
        this.$bus.$emit('user-logged-out');
      }, (error) => {
        console.log(error);
      });
    }
  }

}
</script>
