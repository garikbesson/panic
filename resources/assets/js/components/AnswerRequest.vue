<template>
    <form autocomplete="off" v-on:submit="changeRequest">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label" for="name">Author</label>
            </div>
            <div class="field-body">
                <span id="name">"{{request.name}}"</span>
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
                                <select id="type" v-model="request.type">
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
                        <datepicker :value="state.value" :disabled="state.disabled"></datepicker>
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
                }
            }
        }
    },

    methods: {
        changeRequest() {

        }
    }
}
</script>
