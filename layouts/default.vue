<template>
  <div>
    <Navbar />       <!-- mount the navbar -->
    <div class="jumbotron"></div>        <!-- added a jumbotron btw the nav and content -->
    <nuxt />
  </div>
</template>

<script>
// import '../assets/styles/main.css'
import Navbar from '@/components/Navbar'        // import the navbar component
export default {
    components: {
        Navbar                            // register the navbar component
    }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
