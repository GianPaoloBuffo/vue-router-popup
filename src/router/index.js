import Vue from 'vue';
import VueRouter from 'vue-router';

import Product from '../components/Product.vue';
import ProductImagePopup from '../components/ProductImagePopup.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        component: Product,
        children: [{
            path: '/product/:id/image',
            component: ProductImagePopup,
        }],
    }],
});
