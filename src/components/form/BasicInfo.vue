<template lang="html">
    <div class="form basic-info-form">
        <label class="label">Full Name</label>
        <p class="control">
          <input class="input" type="text" placeholder="Full Name" v-model="name">
        </p>
    </div>
</template>

<script>
export default {
  name: 'basic-info',

  data() {
    return {
      name: "",
      email: "",
      dob: "",
      address: ""
    };
  }

}
</script>
