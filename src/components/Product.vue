<template>
    <div>
        <h1>Fancy Product</h1>
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
        </ul>
        <RouterLink :to="`/product/${product.id}/image`">
            Show previous image
        </RouterLink>
        <AddToCartButton/>

        <RouterView/>
    </div>
</template>

<script>
import AddToCartButton from './AddToCartButton.vue';

export default {
    name: 'Product',
    components: {
        AddToCartButton,
    },
    // This would be populated via an external service / API
    data() {
        return {
            product: {
                id: 1,
            },
        };
    },
};
</script>
