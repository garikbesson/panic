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
            <td>{{request.id}}</td>
            <td>{{request.status}}</td>
            <td>{{request.message}}</td>
            <td>{{request.type}}</td>
            <td>{{request.created_at}}</td>
            <td>{{request.answered_at}}</td>
        </tr>
    </tbody>
    </table>
</template>

<script>
export default {
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