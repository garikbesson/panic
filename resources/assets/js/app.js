import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './routes';
import App from './views/App.vue';

window.Vue = Vue;
// window.axios = axios;

Vue.use(VueRouter);
Vue.use(VueResource);

// window.axios.defaults.headers.common = {
//     'X-Requested-With': 'XMLHttpRequest',
//     'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].getAttribute('content'),
//     'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
// };
Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

new Vue({
    el: '#app',
    router: router,
    render: app => app(App)
});
