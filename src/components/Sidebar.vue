<template lang="html">
    <div class="sidebar">
        <a href="index.html" class="logo">
            <img src="../assets/logo.svg" alt="InstaResume" />
            <span>{{ title }}</span>
        </a>
        <p class="tagline">
            {{ tagline }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data () {
        return {
            title: "InstaResume",
            tagline: "Instantly generate your resume through an intuitive interface and download it as a PDF."
        };
    }
}
</script>
