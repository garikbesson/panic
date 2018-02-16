<template>
    <div>
        <div class="alert alert-danger" v-if="error && !success">
            <p>There was an error, unable to complete registration.</p>
        </div>
        <div class="alert alert-success" v-if="success">
            <p>Registration completed. You can now sign in.</p>
        </div>
        <form autocomplete="off" v-on:submit="register" v-if="!success">
            <div class="field" v-bind:class="{ 'has-error': error && response.username }">
                <label class="label" for="name">Name</label>
                <div class="control">
                    <input type="text" class="input" id="name" v-model="name" required>
                </div>
                <span class="help-block" v-if="error && response.name">{{ response.name }}</span>
            </div>
            <div class="field" v-bind:class="{ 'has-error': error && response.email }">
                <label class="label" for="email">E-mail</label>
                <div class="control">
                    <input type="email" id="email" class="input" placeholder="e.g. igorbessonov.it@gmail.com" v-model="email" required>
                </div>
                <span class="help-block" v-if="error && response.email">{{ response.email }}</span>
            </div>
            <div class="field" v-bind:class="{ 'has-error': error && response.password }">
                <label class="label" for="password">Password</label>
                <div class="control">
                    <input type="password" class="input" v-model="password" required>
                </div>
                <span class="help-block" v-if="error && response.password">{{ response.password }}</span>
            </div> 
            <div class="field">
                <label class="label" for="role">Choose your role</label>
                <div class="control">
                    <div class="select">
                        <select id="role" v-model="role">
                            <option>Client</option>
                            <option>Operator</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="control">
                <button type="submit" class="button is-primary">Submit</button>
            </div>
            <!-- <button type="submit" class="btn btn-default">Submit</button> -->
        </form>
    </div>
</template>

<script>
import auth from '../auth';
console.log('register');
export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            success: false,
            error: false,
            response: null,
            role: 'Client'
        }
    },
    methods: {
        register(event) {
            event.preventDefault()
            auth.register(this, this.name, this.email, this.password, this.role)
        }
    }
}
</script>