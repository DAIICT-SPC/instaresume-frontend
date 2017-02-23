<template lang="html">
    <div class="sidebar">
        <sidebar-form :resume="resume"></sidebar-form>
        <a href="https://github.com/DAIICT-SPC" class="sidebar-footer">
            View on GitHub
        </a>
    </div>
</template>

<script>
import SidebarForm from './SidebarForm'

export default {
  name: 'sidebar',

  components: {
    SidebarForm
  },

  props: {
    resume: {
      required: true,
      type: Object
    }
  }
}
</script>
