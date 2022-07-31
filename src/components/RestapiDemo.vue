<template>
    <div class="grid">
        <div class="col-12">
            <div class="card" id="test">
                <h5>Rest API - GET</h5>
                <button @click="fetchData">get data</button>
                <p>{{ get_response }}</p>
            </div>

            <div class="card" id="test">
                <h5>Rest API - POST</h5>
                <button @click="fetchData">post data</button>
                <p>{{ post_response }}</p>
            </div>


        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            get_response: 'get_response',
            post_response: 'post_response'
        }
    },
    methods: { 
        fetchData: function () {
            axios.get('/get/')  //Django HOST is define in vue.config.js
                .then(response => {
                    this.get_response = response
                })
                .catch(error => {
                    console.error(error);
                })
            
            // this.message = this.response.data['name'];
        },
        
        postData: function () {
            axios.get('/get/')  //Django HOST is define in vue.config.js
                .then(response => {
                    this.get_response = response
                })
                .catch(error => {
                    console.error(error);
                })
            
            // this.message = this.response.data['name'];
        },
        
    },
    beforeMount() {
        this.fetchData()
    },

    

};
</script>