<template>
  <a :href="link" class="w-full lg:w-1/2 flex flex-col gap-4 px-6 py-4 rounded-lg bg-white/10 dark:bg-gray/10 drop-shadow-box hover:rotate-x-6 hover:rotate-y-6 transition duration-150">
    <div>
      <p class="text-sm text-lightgray dark:text-gray transition duration-150">{{ date }}</p>
      <h4>{{ course }}</h4>
      <h5 class="italic font-inter text-lg">{{ school }}</h5>
    </div>
    <p>{{ courseDesc }}</p>
  </a>
</template>

<script>
  export default {
    props: {
      course: {
        type: String,
        required: true
      },
      school: {
        type: String,
        required: true
      },
      courseDesc: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      link: {
        type: String
      }
    }
  }
</script>
