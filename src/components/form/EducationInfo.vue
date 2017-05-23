<template lang="html">
    <div class="form education-info-form">
        <draggable :list="draggableDegrees" :options="{group: 'degrees'}">
           <degree v-for="(degree, index) in draggableDegrees" :degree="degree" :id="parseInt(index)"></degree>
        </draggable>
        <div>
            <button type="button" class="button is-medium is-primary block" @click="addDegree">
                <span class="fa icons icon-small fa-plus"></span> Add
            </button>
        </div>
    </div>
</template>

<script>
import Degree from './Degree'
import draggable from 'vuedraggable'
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

    };
  },

  computed: {
    draggableDegrees() {
      return this.degrees;
    }
  },

  methods: {
    addDegree(event) {
      // Create clone of the Degree Stub
      let degree = Object.assign({}, degreeStub);
      this.degrees.push(degree);
    }
  },

  components: {
    Degree,
    draggable,
  },

  props: {
    degrees: {
      required: true,
      type: Array
    }
  }

}
</script>
