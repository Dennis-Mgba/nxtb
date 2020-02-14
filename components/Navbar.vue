<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <nuxt-link to="/" class="navbar-brand">Nblog</nuxt-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/users" class="nav-link">Users</nuxt-link>
      </li>
      <li class="nav-item">
       <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
    color: #fff;
}

/* .nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
    color: #06C4D1;
} */


.navbar-dark .navbar-nav .nav-link:hover {
    color: #06C4D1;
    border-bottom: 3px solid #06C4D1;
}
</style>
