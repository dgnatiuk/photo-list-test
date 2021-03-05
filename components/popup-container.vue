<template>
    <div class="wrap">
        <vendor-filter>
        </vendor-filter>
        <div class="wrap__bg"></div>
    </div>
</template>

<script>
import VendorFilter from '@/components/vendor-filter';

export default {
    components: { VendorFilter },

    data () {
        return {};
    },

    computed: {},

    created () {
    },

    methods: {},
};
</script>

<style lang="scss">
.wrap {
    position: relative;
    height: 100vh;
    display: flex;

    &__bg {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: rgba(27, 32, 79, 0.2);
    }
}
</style>
