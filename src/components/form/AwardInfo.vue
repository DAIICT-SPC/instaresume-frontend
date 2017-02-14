<template lang="html">
    <div class="form award-info-form">
        <award v-for="(award, index) in awards" :id="parseInt(index)" :award="award"></award>
        <div>
            <button type="button" class="button is-medium is-primary block" @click="addAward">
                <span class="fa icon icon-small fa-plus"></span> Add
            </button>
        </div>
    </div>
</template>

<script>
import Award from './Award'
import awardStub from '../../models/award'

export default {
  name: 'award-info',

  created() {
    this.$bus.$on('remove-award', (id) => {
      this.removeAward(id);
    });
  },

  data() {
    return {
      
    };
  },

  computed: {

  },

  methods: {
    addAward(event) {
      let award = Object.assign({}, awardStub);
      this.awards.push(award);
    },

    removeAward(index) {
      if (this.awards[index].name.length < 1) {
        this.awards.splice(index, 1);
      }
    }
  },

  components: {
    Award
  },

  props: {
    awards: {
      type: Array,
      required: true
    }
  }

}
</script>
