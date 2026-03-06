<template>
  <div class="w-full p-4 fixed top-0 z-40">
    <header class="w-full flex justify-between items-center gap-12 px-6 py-3 rounded-lg bg-white/10 dark:bg-blue/10 shadow-box backdrop-blur-sm">
      <router-link to="/" class="font-bold"><h3>TP</h3></router-link>

      <div class="ml-auto flex gap-6 dark:text-black transition duration-150">
        <router-link to="/projects">Projets</router-link>
        <router-link to="/about">À propos</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <button v-on:click="toggleDarkMode" class="p-2 bg-gray/0 rounded-full hover:bg-gray dark:hover:bg-lightgray cursor-pointer duration-150">
        <img v-if="lightMode" src="/icons/sun.svg" alt="Sun" />
        <img v-else src="/icons/moon.svg" alt="Moon" />
      </button>
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lightMode: true
      }
    },
    methods: {
      toggleDarkMode() {
        this.lightMode = !this.lightMode

        if (this.lightMode) {
          document.documentElement.classList.remove('dark')
        } else {
          document.documentElement.classList.add('dark')
        }
      }
    }
  }
</script>
