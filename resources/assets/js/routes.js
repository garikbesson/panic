import VueRouter from 'vue-router';
import RequestForm from './views/RequestForm';
import Register from './views/Register';
import Signin from './views/Signin';
import Requests from './views/Requests';

let routes = [
    {
        path: '/request_form',
        components: {
            request_form: RequestForm
        }
    },
    {
        path: '/register',
        components: {
            register: Register
        }
    },
    {
        path: '/signin',
        components: {
            signin: Signin
        }
    },
    {
        path: '/requests',
        components: {
            requests: Requests
        }
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});