<template lang="html">
    <div class="form degree-form">
        <panel :title="title" :id="'degree-' + id" :group="'resume-degrees'">
            <div class="form-input">
                <label class="label">Degree Name</label>
                <p class="control">
                  <input class="input" type="text" placeholder="BCA" v-model="degree.name">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Institute/University</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Institute/University" v-model="degree.institute">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Year</label>
                <p class="control">
                  <input class="input" type="text" placeholder="2013 - 2015" v-model="degree.year">
                </p>
            </div>

            <div class="form-input">
                <label class="label">CPI/Aggregate</label>
                <p class="control">
                  <input class="input" type="text" placeholder="8.00 / 75%" v-model="degree.score">
                </p>
            </div>

            <button type="button" class="button is-danger" @click="removeDegree(id)">
                <span class="fa icon icon-small fa-remove"></span> Remove
            </button>
        </panel>
    </div>
</template>

<script>
import Panel from '../Panel'

export default {
  name: 'degree',

  data() {
    return {

    };
  },

  computed: {
    title() {
      if (this.degree.name.length < 1) {
        return 'Degree #' + (this.id + 1);
      }

      return this.degree.name;

    }
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    degree: {

    }
  },

  methods: {
    removeDegree(id) {
      this.$bus.$emit('remove-degree', id);
    }
  },

  components: {
    Panel
  }

}
</script>
