<template lang="html">
    <div class="form internship-form">
        <panel :title="title" :id="'internship-' + id" :group="'resume-internships'">
            <div class="form-input">
                <label class="label">Company/Organization Name</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Amazon" v-model="internship.name">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Description</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Software Development Intern" v-model="internship.description">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Guide/Supervisor</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Prof. X" v-model="internship.guide">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Start</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Jun, 2016" v-model="internship.start">
                </p>
            </div>

            <div class="form-input">
                <label class="label">End</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Aug, 2016" v-model="internship.end">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Team Size</label>
                <p class="control">
                  <input class="input" type="number" placeholder="0" v-model="internship.team_size">
                </p>
            </div>

            <button type="button" class="button is-danger" @click="removeInternship(id)">
                <span class="fa icon icon-small fa-remove"></span> Remove
            </button>
        </panel>
    </div>
</template>

<script>
import Panel from '../Panel'

export default {
  name: 'internship',

  data() {
    return {

    };
  },

  computed: {
    title() {
      if (this.internship.name.length < 1) {
        return 'Internship #' + (this.id + 1);
      }

      return this.internship.name;

    }
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    internship: {

    }
  },

  methods: {
    removeInternship(id) {
      this.$bus.$emit('remove-internship', id);
    }
  },

  components: {
    Panel
  }

}
</script>
