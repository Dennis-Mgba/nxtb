<template>
    <div class="container">
        <h5>{{post.title}}</h5>
        <p>{{post.body}}</p>
        <pre>post-num: {{$route.params.id}}</pre>
        <nuxt-link to="/posts"> <= Back to posts</nuxt-link>
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
        async asyncData({params}) {
            let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)    // here we are using the back tick in plcae of quote
            return {post: data}     //return a single post
        },
        head() {
            return {
                title: this.post.title
            }
        }
    }
</script>
