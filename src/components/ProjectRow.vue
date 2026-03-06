<script setup>
  import ProjectCard from '@/components/ProjectCard.vue';
  import { ref, onMounted } from 'vue';

  const props = defineProps({
    featured: {
      type: Boolean,
      default: false
    }
  })

  const projects = ref(null)

  const categories = {
    jeuvideo: 'Jeu vidéo',
    hardware: 'Hardware',
    web: 'Web',
    ux: 'UX',
    motion: 'Motion design',
    av: 'Vidéo',
    test: "Test"
  }

  onMounted(async () => {
    const response = await fetch('/documents/projects.json')
    projects.value = await response.json()
    
    if (props.featured) {
      projects.value = projects.value.filter(project => project.mainpage === true)
    }
  })
</script>

<template>
  <section id="projects" class="w-full">

    <div v-if="projects" class="w-full grid grid-cols-3 px-16 gap-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :categories="categories"
      />
    </div>
  </section>
</template>
