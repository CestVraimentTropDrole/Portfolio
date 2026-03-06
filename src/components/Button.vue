<template>
  <router-link :to="link" :class="['w-fit px-6 py-3 rounded-lg shadow-box overflow-hidden duration-150', variant === 'primary' ? 'bg-orange hover:bg-[#BE5C17] text-white' : 'border-white dark:border-[#aaaaaa] border hover:bg-[#424242] dark:hover:bg-[#aaaaaa]']">
    {{ caption }}
  </router-link>
</template>

<script>
  export default {
    props: {
      variant: {
        type: String,
        required: true
      },
      link: {
        type: String,
        default: '/'
      },
      caption: {
        type: String,
        required: false,
        default: 'Bouton'
      }
    }
  }
</script>
