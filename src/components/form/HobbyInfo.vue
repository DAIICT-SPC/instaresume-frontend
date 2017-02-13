<template lang="html">
    <div class="form hobby-info-form">
        <hobby v-for="(hobby, index) in hobbies" :id="parseInt(index)" :hobby="hobby"></hobby>
        <div>
            <button type="button" class="button is-medium is-primary block" @click="addHobby">
                <span class="fa icon icon-small fa-plus"></span> Add
            </button>
        </div>
    </div>
</template>

<script>
import Hobby from './Hobby'
import hobbyStub from '../../models/hobby'

export default {
  name: 'hobby-info',

  created() {
    this.$bus.$on('remove-hobby', (id) => {
      this.removeHobby(id);
    });
  },

  data() {
    return {
      hobbies: []
    };
  },

  computed: {

  },

  methods: {
    addHobby(event) {
      let hobby = Object.assign({}, hobbyStub);
      this.hobbies.push(hobby);
    },

    removeHobby(index) {
      if (this.hobbies[index].name.length < 1) {
        this.hobbies.splice(index, 1);
      }
    }
  },

  components: {
    Hobby
  }

}
</script>
