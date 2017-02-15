<template lang="html">
    <div class="sidebar">
        <div class="logo-wrapper">
            <a href="index.html" class="logo">
                <img src="../assets/logo.svg" :alt="title" />
                <!-- <span>{{ title }}</span> -->
            </a>
            <generate-button></generate-button>
        </div>

        <sidebar-form :student="student"></sidebar-form>
    </div>
</template>

<script>
import SidebarForm from './SidebarForm'
import GenerateButton from './GenerateButton'

export default {
  name: 'sidebar',

  data() {
    return {
      title: "InstaResume"
    };
  },

  components: {
    SidebarForm,
    GenerateButton
  },

  props: {
    student: {
      required: true,
      type: Object
    }
  }
}
</script>
