<template lang="html">
    <form class="sidebar-form">
        <panel group="sidebar-panel" id="personal-info" title="Personal Info" :isOpen="false" >
            <personal-info :info="student.info"></personal-info>
        </panel>

        <panel group="sidebar-panel" id="education-info" title="Education" >
            <education-info :degrees="student.degrees"></education-info>
        </panel>

        <panel group="sidebar-panel" id="skill-info" title="Skills" >
            <skill-info :skill="student.skill"></skill-info>
        </panel>

        <panel group="sidebar-panel" id="project-info" title="Projects" >
            <project-info :projects="student.projects"></project-info>
        </panel>

        <panel group="sidebar-panel" id="award-info" title="Awards and Achievements" >
            <award-info :awards="student.awards"></award-info>
        </panel>

        <panel group="sidebar-panel" id="hobby-info" title="Interests and Hobbies" >
            <hobby-info :hobbies="student.hobbies"></hobby-info>
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

  data() {
    return {

    };
  },

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
    student: {
      required: true,
      type: Object
    }
  }

}
</script>
