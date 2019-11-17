import Vue from 'vue';
import PortalVue from 'portal-vue';

import 'wicg-inert';

import router from './router';

import App from './App.vue';

Vue.use(PortalVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
