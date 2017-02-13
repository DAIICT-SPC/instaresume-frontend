<template lang="html">
    <div class="sidebar">
        <div class="logo-wrapper">
            <a href="index.html" class="logo">
                <img src="../assets/logo.svg" alt="InstaResume" />
                <span>{{ title }}</span>
            </a>
        </div>

        <div class="sidebar-form">
            <panel title="Personal Info" :isOpen="true" >
                <personal-info></personal-info>
            </panel>
        </div>
    </div>
</template>

<script>
import Panel from './Panel'
import PersonalInfo from './form/PersonalInfo'

export default {
    name: 'sidebar',
    data () {
        return {
            title: "InstaResume"
        };
    },

    components: {
        Panel,
        PersonalInfo
    }
}
</script>
