<template lang="html">
    <div class="sidebar">
        <div class="logo-wrapper">
            <a href="index.html" class="logo">
                <img src="../assets/logo.svg" alt="InstaResume" />
                <span>{{ title }}</span>
            </a>
        </div>

        <sidebar-form :student="student"></sidebar-form>
    </div>
</template>

<script>
import SidebarForm from './SidebarForm'

export default {
    name: 'sidebar',

    data () {
        return {
            title: "InstaResume"
        };
    },

    components: {
        SidebarForm
    },

    props: {
        student: {
            required: true,
            type: Object
        }
    }
}
</script>
