
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span v-if="success">Thanks for your request! Please wait for the answer.</span>
                        <span v-else>Please fill in the request form</span>
                    </div>
                    <div class="panel-body">
                        <form autocomplete="off" v-on:submit="sendRequest">
                            <div class="field">
                                <label class="label" for="type">Choose request type</label>
                                <div class="control">
                                    <div class="select">
                                        <select id="type" v-model="type">
                                            <option>General questions</option>
                                            <option>Technical questions</option>
                                            <option>Suggestions</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label" for="message">Message</label>
                                <div class="control">
                                    <textarea class="textarea" id="message" placeholder="Please type your message" maxlength="300" v-model="message"></textarea>
                                </div>
                            </div>
                            <div class="control">
                                <button type="submit" class="button is-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import auth from '../auth';

export default {
    data() {
        return {
            type: 'General questions',
            message: null,
            success: false,
            error: false,
            response: null
        }
    },
    methods: {
        sendRequest(event) {
            event.preventDefault()
            Vue.http.post(
                'api/request',
                {
                    type: this.type,
                    message: this.message,
                    author: auth.user.profile.name
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