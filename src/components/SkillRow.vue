<script setup>
  import SkillCard from '@/components/SkillCard.vue';
  import { ref, onMounted } from 'vue';

  const skills = ref(null)

  onMounted(async () => {
    const response = await fetch('/documents/skills.json')
    skills.value = await response.json()
  })
</script>

<template>
  <div class="w-full grid grid-cols-2 lg:grid-cols-6 gap-6">
    <SkillCard 
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill" 
    />
  </div>
</template>
