<template lang="html">
    <form class="sidebar-form">
        <panel group="sidebar-panel" id="personal-info" title="Personal Info" :isOpen="false" >
            <personal-info :info="resume.info"></personal-info>
        </panel>

        <panel group="sidebar-panel" id="education-info" title="Education" >
            <education-info :degrees="resume.degrees"></education-info>
        </panel>

        <panel group="sidebar-panel" id="skill-info" title="Skills" >
            <skill-info :skill="resume.skill"></skill-info>
        </panel>

        <panel group="sidebar-panel" id="project-info" title="Projects" >
            <project-info :projects="resume.projects"></project-info>
        </panel>

        <panel group="sidebar-panel" id="award-info" title="Awards and Achievements" >
            <award-info :awards="resume.awards"></award-info>
        </panel>

        <panel group="sidebar-panel" id="hobby-info" title="Interests and Hobbies" >
            <hobby-info :hobbies="resume.hobbies"></hobby-info>
        </panel>
    </form>
</template>

<script>
import Panel from './Panel'
import PersonalInfo from './form/PersonalInfo'
import EducationInfo from './form/EducationInfo'
import ProjectInfo from './form/ProjectInfo'
import SkillInfo from './form/SkillInfo'
import HobbyInfo from './form/HobbyInfo'
import AwardInfo from './form/AwardInfo'

export default {
  name: 'sidebar-form',

  components: {
    Panel,
    PersonalInfo,
    EducationInfo,
    ProjectInfo,
    AwardInfo,
    HobbyInfo,
    SkillInfo
  },

  props: {
    resume: {
      required: true,
      type: Object
    }
  }

}
</script>
