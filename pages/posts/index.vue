<template>
    <div>
        <div>
            <h2>Making API request - the vue way.</h2>
            <hr>
        </div>
        <div class="container">
            <p v-for="post in posts" :key="post.id">{{post.id}}. {{post.title}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                posts: [],                // declare an empty array
            }
        },
        // create a mounted hook
        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {     // if the api request is successful
                console.log(response)
                this.posts = response.data
            })
            .catch(error => console.log(error));     // catch and console.log error if request fails
        }
    }
</script>
