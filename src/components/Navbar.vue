<template lang="html">
    <div class="navbar">
        <a href="index.html" class="logo">
            <img src="../assets/logo.svg" :alt="title" />
        </a>
        <b>{{user.name}}</b>
        <generate-button></generate-button>
    </div>
</template>

<script>
import GenerateButton from './GenerateButton'

export default {
    name: 'navbar',

    data () {
        return {
            title: "InstaResume"
        }
    },

    props: {
        user: {
            required: true,
            type: Object
        }
    },

    components: {
        GenerateButton
    }
}
</script>
