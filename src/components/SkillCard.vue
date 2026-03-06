<template>
  <div class="w-full flex justify-center items-center gap-3 px-6 py-4 bg-white/10 dark:bg-gray/10 rounded-xl drop-shadow-box transition duration-150">
    <img :src="`/icons/${image}`" :alt="name" />
    <div class="w-fit lg:w-full flex flex-col justify-center gap-1">
      <h4>{{ name }}</h4>
      <p>{{ type }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      image: {
        type: String,
        default: 'sun.svg'
      }
    }
  }
</script>
