<template>
  <tbody >
        <tr>
            <td class="row_request" v-bind="request.id" v-on:click="showEditForm">{{request.id}}</td>
            <td class="row_request" v-bind="request.status" v-on:click="showEditForm">{{request.status}}</td>
            <td class="row_request" v-bind="request.message" v-on:click="showEditForm">{{cutLongMessage()}}</td>
            <td class="row_request" v-bind="request.type" v-on:click="showEditForm">{{request.type}}</td>
            <td class="row_request" v-bind="request.created_at" v-on:click="showEditForm">{{request.created_at}}</td>
            <td class="row_request" v-bind="request.answered_at" v-on:click="showEditForm">{{request.answered_at}}</td>
        </tr>
        <tr v-if="showForm">
            <td colspan="6"><answer-request v-on:show=showEditForm :request=request :show=showForm></answer-request></td>
        </tr>
        <tr v-if="showInfo">
            <td colspan="6"><info-request v-on:show=showEditForm :request=request :show=showInfo></info-request></td>
        </tr>
    </tbody>
</template>

<script>
import auth from '../auth.js';
import answerRequest from '../components/AnswerRequest';
import infoRequest from '../components/infoRequest';

export default {
    components: {
        answerRequest,
        infoRequest
    },
    props: ['request'],
    data() {
            return {
                showForm: false,
                showInfo: false,
                role: auth.user.profile.role,
                shortMessage: null
            }
    },
    methods: {
        showEditForm() {
            if (this.showForm || this.showInfo) {
                this.showForm = false;
                this.showInfo = false;
                return;
            }
            if (this.operatorRole()) {
                this.showForm = true;
            } 
            if (this.clientRole()) {
                this.showInfo = true;
            } 
        },
        operatorRole() {
            return this.role === 'Operator';
        },
        clientRole() {
            return this.role === 'Client';
        },
        cutLongMessage() {
            if (this.request.message.length > 20) {
                return this.request.message.slice(0, 20) + '...';
            } else {
                return this.request.message;
            }
        }
    }
}
</script>

<style>
.row_request {
    cursor: pointer;
}
</style>