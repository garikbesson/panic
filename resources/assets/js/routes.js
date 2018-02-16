import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/UserHome')
    },
    {
        path: '/archive',
        component: require('./views/UserArchive')
    },
    {
        path: '/register',
        component: require('./views/Register')
    },
    {
        path: '/signin',
        component: require('./views/Signin')
    },
    {
        path: '/dashboard',
        component: require('./views/Dashboard')
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});