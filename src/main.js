import Vue from 'vue'

import $ from 'jquery'
Vue.prototype.$ = $;

import App from './App.vue'
import router from './router'
import store from './assets/js/store.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap' 

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
