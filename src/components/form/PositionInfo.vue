<template lang="html">
    <div class="form position-info-form">
        <position v-for="(position, index) in positions" :id="parseInt(index)" :position="position"></position>
        <div>
            <button type="button" class="button is-medium is-primary block" @click="addPosition">
                <span class="fa icon icon-small fa-plus"></span> Add
            </button>
        </div>
    </div>
</template>

<script>
import Position from './Position'
import positionStub from '../../models/position'

export default {
  name: 'position-info',

  created() {
    this.$bus.$on('remove-position', (id) => {
      this.removePosition(id);
    });
  },

  data() {
    return {

    };
  },

  computed: {

  },

  methods: {
    addPosition(event) {
      let position = Object.assign({}, positionStub);
      this.positions.push(position);
    },

    removePosition(index) {
      if (this.positions[index].name.length < 1) {
        this.positions.splice(index, 1);
      }
    }
  },

  components: {
    Position
  },

  props: {
    positions: {
      type: Array,
      required: true
    }
  }

}
</script>
