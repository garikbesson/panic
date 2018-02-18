import VueRouter from 'vue-router';

let routes = [
    {
        path: '/request_form',
        component: require('./views/RequestForm')
    },
    // {
    //     path: '/archive',
    //     component: require('./views/MessagesArchive')
    // },
    {
        path: '/register',
        component: require('./views/Register')
    },
    {
        path: '/signin',
        component: require('./views/Signin')
    },
    {
        path: '/requests',
        component: require('./views/Requests')
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});