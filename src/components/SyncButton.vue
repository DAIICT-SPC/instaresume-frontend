<template lang="html">
    <button :disabled="isProcessing" class="sync-button navbar-button button is-lighter is-medium" type="button" @click="syncResume">
        <span class="button-text" v-show="!isProcessing">SAVE</span>
        <span v-show="!isProcessing" class="button-icon fa fa-save"></span>
        <span v-show="isProcessing" class="fa fa-spinner fa-pulse fa-fw"></span>
    </button>
</template>

<script>
export default {
  name: "sync-button",

  created() {
    this.$bus.$on('resume-synced', (data) => {
      this.isProcessing = false;
    });

    this.$bus.$on("sync-resume-error", (errors) => {
      this.isProcessing = false;
    });
  },

  data() {
    return {
      isProcessing: false
    }
  },

  methods: {
    syncResume() {
      this.isProcessing = true;

      this.$bus.$emit("sync-resume");
    }
  }
}
</script>
