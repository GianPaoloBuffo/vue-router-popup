<template>
    <PopupRouterView :label="product.name">
        <PopupOverlay slot="backdrop"/>
        <PopupLightbox>
            <img
                v-if="product.img"
                :src="product.img.src"
                :alt="product.img.description"
            />
        </PopupLightbox>
    </PopupRouterView>
</template>

<script>
import PopupRouterView from './PopupRouterView.vue';
import PopupOverlay from './PopupOverlay.vue';
import PopupLightbox from './PopupLightbox.vue';

export default {
    name: 'ProductImagePopup',
    components: {
        PopupRouterView,
        PopupOverlay,
        PopupLightbox,
    },
    data() {
        return {
            product: {},
        };
    },
    created() {
        this.product = {
            name: 'Fancy Product',
            img: {
                src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2789&q=80',
                description: 'Simple white watch on white background',
            },
        };
    },
};
</script>
