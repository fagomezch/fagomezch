import Vue from 'vue';
import App from './App.vue';
import store from './store';

import './styles/global/global.scss';
import './styles/objects/animations.scss';
import './styles/objects/layout.scss';
import './styles/settings/fonts.scss';
import './styles/settings/icons.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
