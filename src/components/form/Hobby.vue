<template lang="html">
    <div class="form hobby-form">
        <div class="form-input">
            <input type="text" :placeholder="'Hobby #' + (id + 1)" class="input" v-model="hobby.name" @keydown.8="removeHoppy(id)" />
        </div>
    </div>
</template>

<script>
import Panel from '../Panel'

export default {
  name: 'hobby',

  data() {
    return {

    };
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    hobby: {

    }
  },

  methods: {
    removeHoppy(id) {
      this.$bus.$emit('remove-hobby', id);
    }
  },

  components: {
    Panel
  }

}
</script>
