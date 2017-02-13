<template lang="html">
    <div class="form skill-info-form">
        <div class="form-input">
            <label class="label">Expertise Area/Area(s) of Interest</label>
            <p class="control">
              <textarea class="textarea input" type="text" placeholder="Web Development, App Development, API Development, Open Source" v-model="expertise"></textarea>
            </p>
        </div>

        <div class="form-input">
            <label class="label">Programming Language(s)</label>
            <p class="control">
              <textarea class="textarea input" type="text" placeholder="C, C++, Java, JavaScript, PHP, Python" v-model="programming_languages"></textarea>
            </p>
        </div>

        <div class="form-input">
            <label class="label">Tools and Technologies</label>
            <p class="control">
              <textarea class="textarea input" type="text" placeholder="Android, Socket.io, Arduino, Firebase" v-model="tools"></textarea>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'skill-info',

  data() {
    return {
      expertise: "",
      programming_languages: "",
      tools: ""
    };
  }

}
</script>
