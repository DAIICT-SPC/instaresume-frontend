<template lang="html">
    <div class="sidebar">
        <div class="wrapper">
            <a href="index.html" class="logo">
                <img src="../assets/logo.svg" alt="InstaResume" />
                <span>{{ title }}</span>
            </a>
            <p class="tagline">
                {{ tagline }}
            </p>
        </div>

        <div class="sidebar-form">
            <panel title="Basic Info" :isOpen="true" >
                <basic-info></basic-info>
            </panel>
        </div>
    </div>
</template>

<script>
import Panel from './Panel'
import BasicInfo from './form/BasicInfo'

export default {
    name: 'sidebar',
    data () {
        return {
            title: "InstaResume",
            tagline: "Instantly generate your resume through an intuitive interface and download it as a PDF."
        };
    },

    components: {
        Panel,
        BasicInfo
    }
}
</script>
