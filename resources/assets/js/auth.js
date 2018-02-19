// import Vue from './app.js';
import router from './routes';

export default {
    user: {
        authenticated: false,
        profile: {
            name: '',
            role: '',
            id: ''
        }
    },
    check() {
        let token = localStorage.getItem('id_token')
        if (token !== null) {
            Vue.http.get(
                'api/user?token=' + token,
            ).then(response => {
                this.user.authenticated = true
                this.user.profile = response.data.data
            })
        }
    },
    register(context, name, email, password, role) {
        Vue.http.post(
            'api/register',
            {
                name: name,
                email: email,
                password: password,
                role: role
            }
        ).then(response => {
            context.success = true
        }, response => {
            context.response = response.data
            context.error = true
        })
    },
    signin(context, email, password) {
        Vue.http.post(
            'api/signin',
            {
                email: email,
                password: password
            }
        ).then(response => {
            context.error = false
            localStorage.setItem('id_token', response.data.meta.token)
            Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')

            this.user.authenticated = true
            this.user.profile = response.data.data;

            if (this.user.profile.role === 'Client') {
                router.push({
                    path: '/request_form'
                })
            } else {
                router.push({
                    path: '/requests'
                })
            }
            
        }, response => {
            context.error = true
        })
    },
    signout() {
        localStorage.removeItem('id_token')
        this.user.authenticated = false
        this.user.profile = {name: '', role: '', id: ''}

        router.push({
            path: '/'
        })
    }
}