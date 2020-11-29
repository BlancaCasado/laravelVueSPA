import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // here we import the store.js
import 'bootstrap/dist/css/bootstrap.css'; // added new after above
import 'bootstrap'; //added new after above

import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';

Vue.use(BootstrapVue);
Vue.use(FlashMessage);

new Vue({
    el: '#app',  // id #app from our welcome.blade.php where it will render
    router,
    store,
    render: h => h(App)
});