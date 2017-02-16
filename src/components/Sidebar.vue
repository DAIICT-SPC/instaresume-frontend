<template lang="html">
    <div class="sidebar">
        <sidebar-form :resume="resume"></sidebar-form>
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
