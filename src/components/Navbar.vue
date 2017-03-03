<template lang="html">
    <div class="navbar">
        <account-tab :user="user"></account-tab>

        <a href="index.html" class="logo">
            <img src="../assets/logo.svg" :alt="title" />
        </a>

        <generate-button></generate-button>
        <sync-button></sync-button>
    </div>
</template>

<script>
import AccountTab from './AccountTab'
import GenerateButton from './GenerateButton'
import SyncButton from './SyncButton'

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
        GenerateButton,
        SyncButton,
        AccountTab
    }
}
</script>
