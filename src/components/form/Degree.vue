<template lang="html">
    <div class="form degree-form">
        <panel :title="'Degree #' + (id + 1)">
            <div class="form-input">
                <label class="label">Degree Name</label>
                <p class="control">
                  <input class="input" type="text" placeholder="BCA" v-model="name">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Institute/University</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Institute/University" v-model="institute">
                </p>
            </div>

            <div class="form-input">
                <label class="label">Year</label>
                <p class="control">
                  <input class="input" type="text" placeholder="2013 - 2015" v-model="year">
                </p>
            </div>

            <div class="form-input">
                <label class="label">CPI/Aggregate</label>
                <p class="control">
                  <input class="input" type="text" placeholder="8.00 / 75%" v-model="score">
                </p>
            </div>
        </panel>
    </div>
</template>

<script>
import Panel from '../Panel'

export default {
    name: 'degree',

    data () {
        return {
            name: '',
            institute: '',
            year: '',
            score: ''
        };
    },

    props: {
        id: {
            type: Number,
            required: true
        }
    },

    components: {
        Panel
    }

}
</script>
