<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
<Navbar/>
<div class="container mt-5 mb-5">
    <router-view></router-view>
    <div id="white-block"></div>
  </div>
</template>

<style scoped>

</style>
