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
                <span id="message">{{request.message}}</span>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label" for="answer">Answer</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <textarea class="textarea" id="answer" placeholder="Please type your answer" maxlength="150" v-model="request.answer"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label" for="type">Choose request status</label>
            </div>
            <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <div class="select">
                                <select id="type" v-model="request.status">
                                    <option>Accepted</option>
                                    <option>In process</option>
                                    <option>Done</option>
                                </select>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Choose a answer date</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <datepicker v-model="state.value" :disabled="state.disabled" :format="state.format"></datepicker>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary">
                            Save answer
                        </button>
                    </div>
                </div>
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
                this.success = true
            }, response => {
                this.response = response.data
                this.error = true
            })
        }
    }
}
</script>
