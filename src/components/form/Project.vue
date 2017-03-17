<template lang="html">
    <div class="form project-form">
        <panel :title="title" :id="'project-' + id" :group="'resume-projects'">
            <div class="form-input">
                <label class="label">Project Name</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Amazon" v-model="project.name">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Description</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Software Development Intern" v-model="project.description">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Guide/Supervisor</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Prof. X" v-model="project.guide">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Start</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Jun, 2016" v-model="project.start">
                </p>
            </div>

            <div class="form-input">
                <label class="label">End</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Aug, 2016" v-model="project.end">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Team Size</label>
                <p class="control">
                  <input class="input" type="number" placeholder="0" v-model="project.team_size">
                </p>
            </div>

            <button type="button" class="button is-danger" @click="removeProject(id)">
                <span class="fa icon icon-small fa-remove"></span> Remove
            </button>
        </panel>
    </div>
</template>

<script>
import Panel from '../Panel'

export default {
  name: 'project',

  data() {
    return {

    };
  },

  computed: {
    title() {
      if (this.project.name.length < 1) {
        return 'Project #' + (this.id + 1);
      }

      return this.project.name;

    }
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    project: {

    }
  },

  methods: {
    removeProject(id) {
      this.$bus.$emit('remove-project', id);
    }
  },

  components: {
    Panel
  }

}
</script>
