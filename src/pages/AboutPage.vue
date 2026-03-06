<script setup>
  import Button from '@/components/Button.vue';
  import EducationCard from '@/components/EducationCard.vue';
  import { ref, onMounted } from 'vue';

  const experiences = ref(null)

  onMounted(async () => {
    const response = await fetch('/documents/experience.json')
    experiences.value = await response.json()
  })
</script>

<template>
  <div class="h-[10dvh]"></div>
  <section class="w-full text-center lg:p-16 flex flex-col gap-6">
    <h2>À propos</h2>
    <div class="w-full lg:px-8 flex flex-col">
      <p>Passionné de développement, je poursuis le parcours DevWeb en tant qu'élève de 3e année en BUT MMI, à l'IUT de Chambéry. Polyvalent, je suis intéressé dans le graphisme, UX design et motion design.</p>
      <p>En dehors du travail, j'adore énormément dessiner, ce qui m'a permis de développer une approche créative dans mes projets. Et d'un naturel curieux, j'apprécie toujours apprendre et utiliser de nouvelles compétences.</p>
    </div>
  </section>

  <section>
    
  </section>

  <section id="education" class="w-full min-h-[50dvh] lg:px-16 lg:py-8 flex grow flex-col gap-8 justify-center items-center">
    <h3>Parcours</h3>
    <div class="w-full flex flex-col-reverse gap-8 justify-center items-center">
      <EducationCard
        v-for="experience in experiences"
        :course="experience.name"
        :school="experience.place"
        :course-desc="experience.description"
        :date="experience.date"
        :link="experience.link"
        :type="experience.type"
      />
    </div>
  </section>

  <section id="final" class="w-full flex flex-col items-center gap-8 lg:px-6 py-12">
    <h2 class="text-orange">Intéressé ?</h2>
    <p class="text-white text-center lg:w-1/2 dark:text-black transition duration-150">Dans ma poursuite en 3e année d'études, je recherche des stages pour l'année 2026. Si mon profil vous intéresse, je serai ravi de discuter avec vous de notre potentielle collaboration.</p>
    <Button variant="primary" link="/contact" caption="Me contacter" />
  </section>
</template>
