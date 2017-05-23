<template lang="html">
    <div class="form project-info-form">
        <draggable :list="draggableProjects" :options="{group: 'internships'}">
            <project v-for="(project, index) in draggableProjects" :project="project" :id="parseInt(index)"></project>
        </draggable>
        <div>
            <button type="button" class="button is-medium is-primary block" @click="addProject">
                <span class="fa icon icon-small fa-plus"></span> Add
            </button>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
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
    draggableProjects() {
      return this.projects;
    }
  },

  methods: {
    addProject(event) {
      // Create clone of the Project Stub
      let project = Object.assign({}, projectStub);
      this.projects.push(project);
    }
  },

  components: {
    Project,
    draggable
  },

  props: {
    projects: {
      type: Array,
      required: true
    }
  }

}
</script>
