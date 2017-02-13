<template lang="html">
    <div class="form education-info-form">
        <div class="block">
            <degree v-for="(degree, index) in degrees" :degree="degree" :id="parseInt(index)"></degree>
        </div>

        <div>
            <button type="button" class="button is-primary" @click="addDegree">
                <span class="fa icon icon-small fa-plus"></span> Add
            </button>
        </div>
    </div>
</template>

<script>
import Degree from './Degree'
import degreeStub from '../../models/degree'

export default {
  name: 'education-info',

  created() {
    this.$bus.$on('remove-degree', (id) => {
      this.degrees.splice(id, 1);
    });
  },

  data() {
    return {
      degrees: []
    };
  },

  computed: {

  },

  methods: {
    addDegree(event) {
      // Create clone of the Degree Stub
      let degree = Object.assign({}, degreeStub);
      this.degrees.push(degree);
    }
  },

  components: {
    Degree
  }

}
</script>
