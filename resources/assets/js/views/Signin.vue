<template>
    <div>
        <div class="alert alert-danger" v-if="error">
            <p>There was an error, unable to sign in with those credentials.</p>
        </div>
        <form autocomplete="off" v-on:submit="signin">
            <div class="field">
                <label for="email">E-mail</label>
                <div class="control">
                    <input type="email" id="email" class="input" placeholder="e.g. igorbessonov.it@gmail.com" v-model="email" required>
                </div>
            </div>
            <div class="field">
                <label for="password">Password</label>
                <div class="control">
                    <input type="password" id="password" class="input" v-model="password" required>
                </div>
            </div>
            <button type="submit" class="button is-primary">Sign in</button>
        </form>
    </div>
</template>
<script>
import auth from '../auth.js';

export default {
    data() {
            return {
                email: null,
                password: null,
                error: false
            }
        },
        methods: {
            signin(event) {
                event.preventDefault()
                auth.signin(this, this.email, this.password)
            }
        }
}
</script>