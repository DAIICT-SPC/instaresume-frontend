<template lang="html">
    <div class="form skill-info-form">
        <div class="form-input">
            <label class="label">Expertise Area/Area(s) of Interest</label>
            <p class="control">
              <textarea class="textarea input" type="text" placeholder="Web Development, App Development, API Development, Open Source" v-model="skill.expertise"></textarea>
            </p>
        </div>

        <div class="form-input">
            <label class="label">Programming Language(s)</label>
            <p class="control">
              <textarea class="textarea input" type="text" placeholder="C, C++, Java, JavaScript, PHP, Python" v-model="skill.programming_languages"></textarea>
            </p>
        </div>

        <div class="form-input">
            <label class="label">Tools and Technologies</label>
            <p class="control">
              <textarea class="textarea input" type="text" placeholder="Android, Socket.io, Arduino, Firebase" v-model="skill.tools"></textarea>
            </p>
        </div>

        <div class="form-input">
            <label class="label">Technical Electives</label>
            <p class="control">
                <textarea class="textarea input" type="text" placeholder="Cryptography, Software Testing" v-model="skill.technical_electives"></textarea>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'skill-info',

  data() {
    return {

    };
  },

  props: {
    skill: {
      type: Object,
      required: true
    }
  }

}
</script>
