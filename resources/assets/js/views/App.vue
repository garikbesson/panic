<template>
    <div>
        <section class="hero is-primary is-medium">
        <div class="hero-head">
            <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                <a class="navbar-item">
                    Communications Service
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                </div>
                <div id="navbarMenuHeroA" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item" v-if="!auth.user.authenticated">
                            <router-link to="/signin">
                            Sign in
                            </router-link>
                        </a>
                        <a class="navbar-item" v-if="auth.user.authenticated">
                            <a href="javascript:void(0)" v-on:click="signout">
                            Sign out
                            </a>
                        </a>
                        <a class="navbar-item" v-if="!auth.user.authenticated">
                            <router-link to="/register">
                                Register
                            </router-link>
                        </a>
                    </div>
                </div>
            </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
            <h1 class="title">
                Communications Service
            </h1>
            </div>
        </div>
        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul v-if="auth.user.profile.role === 'Client'">
                        <router-link tag="li" to="/request_form" exact>
                            <a>Request Form</a>
                        </router-link>

                        <router-link tag="li" to="/requests">
                            <a>Messages Archive</a>
                        </router-link>
                    </ul>
                </div>
            </nav>
        </div>
        </section>
        <section class="section">
            <div class="container" >
                <router-view name="register"></router-view>
                <router-view name="signin"></router-view>
                <router-view name="request_form" v-if="auth.user.authenticated"></router-view>
                <router-view name="requests" v-if="auth.user.authenticated"></router-view>
                <h1 class="title is-1"  v-if="!auth.user.authenticated">Please log in</h1>    
            </div>
        </section>
    </div>
</template>
<script>
import auth from '../auth.js';
import signin from './Signin.vue';
import register from './Register.vue';

components: {
    signin,
    register
}

export default {
    data() {
            return {
                auth: auth
            }
        },
        methods: {
            signout() {
                auth.signout()
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                auth.check()
            })
        }
}
</script>

<style scoped>
.title {
 text-align: center;
} 
</style>