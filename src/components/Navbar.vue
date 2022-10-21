<script>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <router-link class="navbar-brand" :to="{name: 'home'}"><b>Home</b></router-link> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link class="navbar-brand" :to="{name: 'player'}"><b>Players</b></router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"><router-link class="navbar-brand" :to="{name: 'login'}"><b>Sign in</b></router-link></a>
        </li>
    
        <li class="nav-item">
          <a class="nav-link active" href="#"><router-link class="navbar-brand" :to="{name: 'register'}"><b>Sign up</b></router-link></a>
        </li>
      </ul>
 
    </div>
  </div>
</nav>
</template>

