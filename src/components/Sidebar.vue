<template lang="html">
    <div class="sidebar">
        <sidebar-form :student="student"></sidebar-form>
    </div>
</template>

<script>
import SidebarForm from './SidebarForm'

export default {
  name: 'sidebar',

  data() {
    return {

    };
  },

  components: {
    SidebarForm
  },

  props: {
    student: {
      required: true,
      type: Object
    }
  }
}
</script>
