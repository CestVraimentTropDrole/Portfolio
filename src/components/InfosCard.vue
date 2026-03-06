<template>
  <a :href="link" class="w-full lg:w-3/4 flex items-center gap-6 bg-white/10 dark:bg-gray/10 px-6 py-4 rounded-lg drop-shadow-box hover:rotate-x-6 hover:rotate-y-6 transition duration-150">
    <div class="h-full max-w-14 max-h-14 bg-white/10 dark:bg-gray/10 p-3 aspect-square rounded-full transition duration-150">
      <img :src="`/icons/${image}`" alt="Téléphone" class="w-full aspect-square" />
    </div>
    <div class="flex flex-col gap-2">
      <h4>{{ name }}</h4>
      <p>{{ value }}</p>
    </div>
  </a>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  }
</script>
