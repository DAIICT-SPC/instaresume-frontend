<template lang="html">
    <div class="form education-info-form">
        <div class="block">
            <degree v-for="(degree, index) in degreeCount" :id="index"></degree>
        </div>

        <div>
            <button type="button" class="button is-primary" @click="addDegree">
                <span class="fa icon icon-small fa-plus"></span> Add
            </button>
            <button type="button" class="button is-default is-pulled-right" v-show="degreeCount > 1" @click="removeDegree">
                <span class="fa icon icon-small fa-remove"></span> Remove
            </button>
        </div>
    </div>
</template>

<script>
import Degree from './Degree'

export default {
    name: 'education-info',

    data () {
        return {
            degreeCount: 1
        };
    },

    methods: {
        addDegree (event) {
            ++this.degreeCount;
        },

        removeDegree (event) {
            if (this.degreeCount > 1) {
                --this.degreeCount;
            }
        }
    },

    components: {
        Degree
    }

}
</script>
