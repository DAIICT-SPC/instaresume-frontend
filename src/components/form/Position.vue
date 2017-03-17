<template lang="html">
    <div class="form position-form">
        <div class="form-input">
            <input type="text" :placeholder="'Position of Responsibility #' + (id + 1)" class="input" v-model="position.name" @keydown.8="removePosition(id)" />
        </div>
    </div>
</template>

<script>
import Panel from '../Panel'

export default {
  name: 'position',

  data() {
    return {

    };
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    position: {

    }
  },

  methods: {
    removePosition(id) {
      this.$bus.$emit('remove-position', id);
    }
  },

  components: {
    Panel
  }

}
</script>
