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
        <request v-for="request in requests" :key="request.id" :request=request></request>
    </table>
</template>

<script>

import request from '../components/Request';

export default {
    components: {
        request
    },
    data() {
            return {
                requests: []
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