<template>
    <div>
        <div>
            <h2>Making API request - using the nuxt native asyncData.</h2>
            <hr>
        </div>
        <div class="container">
            <Card v-for="post in allPosts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card'

    export default {
        components: {
            Card
        },
        data() {
            return {
                posts: []
            }
        },
        computed: {
            allPosts() {
                return this.$store.getters.posts
            }
        },

        // using nuxt native asynData
        async asyncData( {store} ) {
            let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // return {posts: data}
            store.dispatch('setPosts', data)
        },

        head: {
            title: 'Nblog | List of posts'
        }
    }
</script>
