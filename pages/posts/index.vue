<template>
    <div>
        <div>
            <h2>Making API request - using the nuxt native asyncData.</h2>
            <hr>
        </div>
        <div class="container">
            <Card v-for="post in posts" :key="post.id" :post="post" />
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
        // using nuxt native asynData
        async asyncData( {store} ) {
            let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // return {posts: data}
            store.dispatch('setPosts', data)
        },


        // asyncData() {
        //     return axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => {
        //         return {posts: res.data}
        //     })
        // },

        // // using regular vue mounted hook
        // mounted() {
        //     axios.get('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => {     // if the api request is successful
        //         console.log(response)
        //         this.posts = response.data
        //     })
        //     .catch(error => console.log(error));     // catch and console.log error if request fails
        // },
        head: {
            title: 'Nblog | List of posts'
        }
    }
</script>
