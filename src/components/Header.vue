<template>
  <div class="w-full p-1 lg:p-4 fixed top-0 z-40">
    <header class="w-full flex justify-between items-center gap-12 px-6 py-3 rounded-lg bg-white/10 dark:bg-blue/10 shadow-box box-border backdrop-blur-sm">
      <router-link to="/" class="font-bold"><h3>TP</h3></router-link>

      <div class="ml-auto gap-6 dark:text-black transition duration-150 hidden lg:flex">
        <router-link to="/projects">Projets</router-link>
        <router-link to="/about">À propos</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <div class="flex items-center gap-3">
        <button v-on:click="toggleDarkMode" class="p-2 bg-gray/0 rounded-full hover:bg-gray dark:hover:bg-lightgray cursor-pointer duration-150">
          <img v-if="lightMode" src="/icons/sun.svg" alt="Sun" />
          <img v-else src="/icons/moon.svg" alt="Moon" />
        </button>

        <svg 
          v-on:click="togglePhoneMenu"
          class="w-6 lg:hidden cursor-pointer"
          :class="lightMode ? 'text-white' : 'text-black'"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
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
      },
      togglePhoneMenu() {
        // Action
      }
    }
  }
</script>
