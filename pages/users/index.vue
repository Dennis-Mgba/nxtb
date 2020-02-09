<template>
    <div>
        <h1>User Page</h1>

        <input type="text" v-model="id"/>    <!--get the input data called id-->
        <button @click="loadUserId">Load User</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: ''       // declare the variale id as empty
            }
        },
        methods: {
            loadUserId() {
                this.$router.push(`/users/${this.id}`)    // code to push the id data entered into the input to the empty id variable and use it on the route
            }
        }
    }
</script>
