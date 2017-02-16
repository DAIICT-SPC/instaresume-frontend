<template lang="html">
    <button class="generate-button button is-lighter is-medium" type="button" @click="generateResume">
        <span v-show="!isProcessing">Download PDF</span>
        <span v-show="isProcessing" class="fa fa-spinner fa-pulse fa-fw"></span>
    </button>
</template>

<script>
export default {
  name: "generate-button",

  created() {
    this.$bus.$on('resume-generated', (data) => {
      this.isProcessing = false;
    });
  },

  data() {
    return {
      isProcessing: false
    }
  },

  methods: {
    generateResume() {
      this.isProcessing = true;

      this.$bus.$emit("generate-resume");
    }
  }
}
</script>
