<template>
  <tbody >
        <tr>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.id}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.status}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.message}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.type}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.created_at}}</td>
            <td v-bind:class="{row_request: operatorRole()}" v-on:click="showEditForm">{{request.answered_at}}</td>
        </tr>
        <tr>
            <td colspan="6"><answer-request v-if="showForm" :request=request></answer-request></td>
        </tr>
    </tbody>
</template>

<script>
import auth from '../auth.js';
import answerRequest from '../components/AnswerRequest';

export default {
    components: {
        answerRequest
    },
    props: ['request'],
    data() {
            return {
                showForm: false,
                role: auth.user.profile.role
            }
    },
    methods: {
        showEditForm() {
            if (this.showForm) {
                this.showForm = false;
                return;
            }
            if (this.operatorRole()) {
                this.showForm = true;
            } 
        },
        operatorRole() {
            return this.role === 'Operator';
        },
    }
}
</script>
