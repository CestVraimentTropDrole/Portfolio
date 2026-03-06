<script setup>
  import EducationCard from '@/components/EducationCard.vue';
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

  <section id="education" class="w-full min-h-[50dvh] lg:px-16 lg:py-8 flex grow flex-col gap-8 justify-center items-center">
    <h3>Parcours</h3>
    <EducationCard
      course="BUT Métiers du Multimédia et de l'Internet"
      school="IUT de Chambéry"
      course-desc="Axée sur la professionalisation et les projets concrets, MMI est un parcours pluridisciplinaire qui forme au développement Web, grpahisme, vidéo et gestion de projet."
      date="2023-2026"
      link="https://mmi.univ-smb.fr/"
    />
  </section>
</template>
