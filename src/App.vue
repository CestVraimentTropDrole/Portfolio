<script setup lang="ts">
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <main class="w-full">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style>
</style>
