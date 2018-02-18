<template>

    <table class="table is-fullwidth is-striped is-hoverable">
    <thead>
        <tr>
        <th>Id</th>
        <th>Status</th>
        <th>Message</th>
        <th>Type</th>
        <th>Date Created</th>
        <th>Date Answer</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="request in requests" :key="request.id">
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.id}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.status}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.message}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.type}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.created_at}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.answered_at}}</td>
            <span>Some form for work with request</span>
        </tr>

    </tbody>
    </table>
</template>

<script>
import auth from '../auth.js';

export default {
    data() {
            return {
                requests: [],
                role: auth.user.profile.role
            }
        },
        methods: {
            getRequests(event) {
                Vue.http.get(
                    'api/request'
                ).then(response => {
                    this.success = true;
                    for (let request of response.data) {
                        this.requests.push(request);
                    }
                }, response => {
                    this.response = response.data
                    this.error = true
                })
            },
            showEditForm() {
                if (this.operatorRole()) {
                    alert('click');
                }
            },
            operatorRole() {
                return this.role === 'Operator';
            }
        },
        mounted() {
            this.getRequests();
        }
}   
</script>

<style>
.row_request {
    cursor: pointer;
}
</style>