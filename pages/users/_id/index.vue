<template>
  <div class="">
      <h1>This is a unique user id = {{$route.params.id}}</h1>
  </div>
</template>
<script>
export default {
// the context here is an object and can help us access the route parameter.
    // validate(context) {
    //     // using a regular expression
    //     return /^\d+$/.test(context.params.id)
    // }

    validate({params}) {
        return /^\d+$/.test(params.id)
    }
}
</script>
