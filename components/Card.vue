<template>
    <div>
        <div class="card bg-light mb-3" style="max-width: 18rem;">
          <div class="card-header">PostID: {{post.id}}</div>
          <div class="card-body">
            <h5 class="card-title">Post Title: <nuxt-link :to="{name: 'posts-id', params: {id: post.id}}">{{post.title}}</nuxt-link></h5>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: Object
        },
        // props: ['post']         // can be received as an array too
    }
</script>
