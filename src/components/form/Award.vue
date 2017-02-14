<template lang="html">
    <div class="form award-form">
        <div class="form-input">
            <input type="text" :placeholder="'Award/Achievement #' + (id + 1)" class="input" v-model="award.name" @keydown.8="removeAward(id)" />
        </div>
    </div>
</template>

<script>
import Panel from '../Panel'

export default {
  name: 'award',

  data() {
    return {

    };
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    award: {

    }
  },

  methods: {
    removeAward(id) {
      this.$bus.$emit('remove-award', id);
    }
  },

  components: {
    Panel
  }

}
</script>
