<template lang="html">
    <div class="form basic-info-form">
        <div class="form-input">
            <label class="label">Name</label>
            <p class="control">
              <input class="input" type="text" placeholder="Full Name" v-model="info.name">
            </p>
        </div>

        <div class="form-input">
            <label class="label">Email</label>
            <p class="control">
              <input class="input" type="text" placeholder="DAIICT Email ID" v-model="info.email">
            </p>
        </div>

        <div class="form-input">
            <label class="label">Date of Birth</label>
            <p class="control">
              <input class="input" type="text" placeholder="April 01, 1991" v-model="info.dob">
            </p>
        </div>

        <div class="form-input">
            <label class="label">Address</label>
            <p class="control">
              <textarea class="textarea input" type="text" placeholder="Address" v-model="info.address"></textarea>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'personal-info',

  data() {
    return {

    };
  },

  props: {
    info: {
      type: Object,
      required: true
    }
  }

}
</script>
