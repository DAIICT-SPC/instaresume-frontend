<template lang="html">
    <div class="sidebar">
        <div class="logo-wrapper">
            <a href="index.html" class="logo">
                <img src="../assets/logo.svg" alt="InstaResume" />
                <span>{{ title }}</span>
            </a>
        </div>

        <form class="sidebar-form">
            <panel title="Personal Info" :isOpen="false" >
                <personal-info></personal-info>
            </panel>

            <panel title="Education" >
                <education-info></education-info>
            </panel>

            <panel title="Skills" >
                <skill-info></skill-info>
            </panel>
        </form>
    </div>
</template>

<script>
import Panel from './Panel'
import PersonalInfo from './form/PersonalInfo'
import EducationInfo from './form/EducationInfo'
import SkillInfo from './form/SkillInfo'

export default {
    name: 'sidebar',
    data () {
        return {
            title: "InstaResume"
        };
    },

    components: {
        Panel,
        PersonalInfo,
        EducationInfo,
        SkillInfo
    }
}
</script>
