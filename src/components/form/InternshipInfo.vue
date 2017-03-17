<template lang="html">
    <div class="form internship-info-form">
            <internship v-for="(internship, index) in internships" :internship="internship" :id="parseInt(index)"></internship>
        <div>
            <button type="button" class="button is-medium is-primary block" @click="addInternship">
                <span class="fa icon icon-small fa-plus"></span> Add
            </button>
        </div>
    </div>
</template>

<script>
import Internship from './Internship'
import internshipStub from '../../models/internship'

export default {
  name: 'internship-info',

  created() {
    this.$bus.$on('remove-internship', (id) => {
      this.internships.splice(id, 1);
    });
  },

  data() {
    return {

    };
  },

  computed: {

  },

  methods: {
    addInternship(event) {
      // Create clone of the Internship Stub
      let internship = Object.assign({}, internshipStub);
      this.internships.push(internship);
    }
  },

  components: {
    Internship
  },

  props: {
    internships: {
      type: Array,
      required: true
    }
  }

}
</script>
