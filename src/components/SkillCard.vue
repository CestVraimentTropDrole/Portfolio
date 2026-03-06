<template>
  <div class="w-full flex justify-center items-center gap-3 px-6 py-4 bg-white/10 dark:bg-gray/10 rounded-xl drop-shadow-box transition duration-150">
    <img :src="`/icons/${skill.image}`" :alt="skill.name" />
    <div class="w-fit lg:w-full flex flex-col justify-center gap-1">
      <h4>{{ skill.name }}</h4>
      <p>{{ skill.type }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      skill: {
        type: Object,
        required: true
      }
    }
  }
</script>
