<template lang="html">
    <div class="form project-info-form">
            <project v-for="(project, index) in projects" :project="project" :id="parseInt(index)"></project>
        <div>
            <button type="button" class="button is-medium is-primary block" @click="addProject">
                <span class="fa icon icon-small fa-plus"></span> Add
            </button>
        </div>
    </div>
</template>

<script>
import Project from './Project'
import projectStub from '../../models/project'

export default {
  name: 'project-info',

  created() {
    this.$bus.$on('remove-project', (id) => {
      this.projects.splice(id, 1);
    });
  },

  data() {
    return {

    };
  },

  computed: {

  },

  methods: {
    addProject(event) {
      // Create clone of the Project Stub
      let project = Object.assign({}, projectStub);
      this.projects.push(project);
    }
  },

  components: {
    Project
  },

  props: {
    projects: {
      type: Array,
      required: true
    }
  }

}
</script>
