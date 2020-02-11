<template>
    <div class="container">
        <h5>{{post.title}}</h5>
        <p>{{post.body}}</p>
        <pre>post-num: {{$route.params.id}}</pre>
        <nuxt-link to="/posts">Back to post</nuxt-link>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                post: ''
            }
        },
        async asyncData(context) {
            let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)    // here we are using the back tick in plcae of quote
            return {post: data}     //return a single post
        }
    }
</script>
