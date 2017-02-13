<template lang="html">
<div :class="{ panel: true, open: !isHidden}">
    <div class="panel-header" @click="toggle">
        <p>{{ title }} <span :class="{ 'fa icon': true, 'fa-chevron-down': isHidden, 'fa-chevron-up': !isHidden }"></span></p>
    </div>
    <div :class="{ hidden: isHidden, 'panel-body': true }">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'panel',

    data () {
        return {
            isHidden: !this.isOpen,
        };
    },

    props: {
        title: {
            type: String,
            required: true
        },
        isOpen: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        toggle (event) {
            this.isHidden = !this.isHidden;
        }
    }

}
</script>
