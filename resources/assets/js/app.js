import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './routes';
import App from './views/App.vue';

window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

new Vue({
    el: '#app',
    router: router,
    render: app => app(App)
});
