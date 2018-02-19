<template>
    <table class="table is-fullwidth is-striped is-hoverable" v-if="auth.user.authenticated">
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
        <request v-for="request in requests" :key="request.id" :request=request></request>
    </table>
</template>

<script>
import auth from '../auth';
import request from '../components/Request';

export default {
    components: {
        request
    },
    data() {
            return {
                requests: [],
                auth: auth
            }
    },
    methods: {
        getRequestsById(id) {
            Vue.http.get(
                `api/request/${id}`
            ).then(
                response => this.successHandler(response),
                response => this.errorHandler(response))
        },
        getRequests() {
            Vue.http.get(
                `api/request`
            ).then(
                response => this.successHandler(response),
                response => this.errorHandler(response))
        },
        successHandler(response) {
            this.success = true;
            for (let request of response.data) {
                this.requests.push(request);
            }
        },
        errorHandler(response) {
            this.response = response.data
            this.error = true
        },
        fetchData() {
            if (this.auth.user.profile.role === 'Client') {
                this.getRequestsById(this.auth.user.profile.id);
                return;
            }
            if (this.auth.user.profile.role === 'Operator') {
                this.getRequests();
                return;
            } 
        }
    },
    mounted() {
        this.$nextTick(function () {
                this.fetchData();
        })
    }
}   
</script>