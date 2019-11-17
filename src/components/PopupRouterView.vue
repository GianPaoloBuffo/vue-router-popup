<template>
    <Portal to="popup">
        <PopupWrap
            :label="label"
            @close="$router.back()"
        >
            <slot name="backdrop" slot="backdrop"/>
            <slot/>
        </PopupWrap>
    </Portal>
</template>

<script>
import PopupWrap from './PopupWrap.vue';

export default {
    name: 'PopupRouterView',
    props: {
        label: {
            required: true,
            type: String,
        },
    },
    components: {
        PopupWrap,
    },
};
</script>
