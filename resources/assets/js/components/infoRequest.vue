<template>
    <form autocomplete="off" v-on:submit="changeRequest">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label" for="name">Author</label>
            </div>
            <div class="field-body">
                <span id="name">{{request.name}}</span>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label" for="name">Type</label>
            </div>
            <div class="field-body">
                <span id="name">{{request.type}}</span>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label" for="message">Message</label>
            </div>
            <div class="field-body">
                <article class="message">
                    <div class="message-body">
                        {{request.message}}
                    </div>
                </article>
            </div>
        </div>
    
        <div class="field is-horizontal"  v-if="request.answer !== null">
            <div class="field-label">
                <label class="label" for="answer">Answer</label>
            </div>
            <div class="field-body">
                <span>{{request.answer}}</span>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label" for="type">Request status</label>
            </div>
            <div class="field-body">
                <span>{{request.status}}</span>
            </div>
        </div>
        <div class="field is-horizontal" v-if="request.answered_at !== null">
            <div class="field-label">
                <label class="label">Answer date</label>
            </div>
            <div class="field-body">
                <span>{{request.answered_at}}</span>
            </div>
        </div>
    </form>
</template>

<script>
import datepicker from 'vuejs-datepicker';
import date from 'date-and-time';

export default {

    components: {
        datepicker
    },

    props: ['request'],

    data() {
        return {
            state: {
                value: new Date(),
                disabled: {
                    to: new Date(),
                    from: new Date(new Date().setDate(new Date().getDate()+1))
                },
                format: 'yyyy-MM-dd'
            }
        }
    },

    methods: {
        changeRequest() {
            event.preventDefault();
            let valueHours = this.state.value.getHours();
            let valueDate = this.state.value.getDate();
            let currentDate = this.state.disabled.to.getDate();
            let differenceDate = valueDate - currentDate;
        
            if (differenceDate === 1) {
                this.state.value.setHours(valueHours - 12);
            }
            
            Vue.http.post(
                'api/answer',
                {
                    id: this.request.id,
                    answer: this.request.answer,
                    answered_at: date.format(this.state.value, 'YYYY-MM-DD HH:mm:ss'),
                    status: this.request.status
                }
            ).then(response => {
                this.success = true;
            }, response => {
                this.response = response.data
                this.error = true
            })
        }
    }
}
</script>

<style>
#message {
    text-overflow: ellipsis;
}
</style>

