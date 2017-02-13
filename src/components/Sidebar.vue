<template lang="html">
    <div class="sidebar">
        <a href="index.html" class="logo">
            <img src="../assets/logo.svg" alt="InstaResume" />
            <span>{{title}}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data () {
        return {
            title: "InstaResume"
        };
    }
}
</script>
