<template lang="html">
<div :class="{ panel: true, open: !isHidden}" :id="id">
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

    created () {
        this.$bus.$on('panel-open', (data) => {
            if (this.group === data.group) {
                if (this.id !== data.id) {
                    this.isHidden = true;
                }
            }
        });
    },

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
        },
        id: {
            type: String,
            required: true
        },
        group: {
            type: String,
            required: true
        }


    },

    methods: {
        toggle (event) {
            this.isHidden = !this.isHidden;
            this.$bus.$emit('panel-open', { group: this.group, id: this.id});
        }
    },

}
</script>
