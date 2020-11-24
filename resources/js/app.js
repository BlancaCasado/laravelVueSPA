import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'; // added new after above
import 'bootstrap'; //added new after above

new Vue({
    el: '#app',  // id #app from our welcome.blade.php where it will render
    router,
    render: h => h(App)
});