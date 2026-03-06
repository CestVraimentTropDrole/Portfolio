<script setup>
  import Button from '@/components/Button.vue';
  import SkillCard from '@/components/SkillCard.vue';
  import ProjectRow from '@/components/ProjectRow.vue';
</script>

<template>
  <section id="hero" class="w-full h-[90dvh] flex flex-col items-center justify-center gap-8">
    <div class="w-full lg:w-1/2 flex flex-col gap-4 px-6 lg:p-0 text-center">
      <h1>Portfolio</h1>
      <h2 class="text-orange">Dev Full-Stack et Créatif</h2>
      <p class="font-medium">Actuellement en 3e année de BUT MMI à Chambéry, passionné en développement web, webdesign et UX design, je recherche un stage pour le courant de cette année.</p>
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-3">
      <Button variant="primary" link="#showcase" caption="Voir mes projets" />
      <Button variant="secondary" link="#about" caption="Me contacter" />
    </div>
  </section>

  <section id="showcase" class="w-full flex flex-col items-center gap-12 px-6 lg:px-16 py-12">
    <div class="w-full lg:w-1/2 flex flex-col items-center gap-3 text-center">
      <h2>Mes réalisations</h2>
      <p>Voici un aperçu de mes projets les plus récents, qui montrent ce que je suis capable de réaliser, et ce que j'ai appris.</p>
    </div>
    <ProjectRow :featured="true" />
    <Button variant="secondary" link="projects" caption="Voir plus de projets" />
  </section>

  <section id="skills" class="w-full flex flex-col items-center gap-12 px-6 lg:px-16 py-12 drop-shadow-box text-white dark:text-black transition duration-150">
    <div class="w-full lg:w-1/2 flex flex-col items-center gap-3 text-center">
      <h2>Mes outils</h2>
      <p>D'une nature curieuse, j'essaye toujours d'apprendre plus de langages et d'outils, pour rester à la page et ne pas être dépassé.</p>
    </div>
    <!--Skills Row-->
    <div class="w-full grid grid-cols-2 lg:grid-cols-6 gap-6">
      <SkillCard name="Figma" type="Logiciel" image="figma.svg" />
      <SkillCard name="VueJS" type="Frontend" image="vuejs.svg" />
      <SkillCard name="Tailwind" type="Frontend" image="tailwind.svg" />
      <SkillCard name="Symfony" type="Backend" image="symfony.svg" />
      <SkillCard name="Java" type="Langage" image="java.svg" />
      <SkillCard name="Python" type="Langage" image="python.svg" />
    </div>
  </section>

  <section id="about" class="w-full flex flex-col items-center gap-8 px-6 lg:px-16 py-12">
    <h2 class="w-fit lg:w-full">À propos</h2>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div id="infos" class="w-full rounded-xl bg-white/10 dark:bg-gray/10 px-6 py-4 drop-shadow-box transition duration-150">
        <h3>Timéo Pérou</h3>
        <h4>20 ans</h4>
        <p class="font-light">timeo.perou@etu.univ-smb.fr</p>
        <p class="font-light">06 41 97 65 84</p>
      </div>
      <div class="w-full flex flex-col gap-3 px-0 lg:px-6 py-5 lg:py-3 border-t-2 lg:border-l-2 lg:border-t-0 border-white dark:border-black transition duration-150">
        <p>Passionné de développement, je poursuis le parcours DevWeb en tant qu'élève de 3e année en BUT MMI, à l'IUT de Chambéry. Polyvalent, je suis intéressé dans le graphisme, UX design et motion design.</p>
        <p>En dehors du travail, j'adore énormément dessiner, ce qui m'a permis de développer une approche créative dans mes projets. Et d'un naturel curieux, j'apprécie toujours apprendre et utiliser de nouvelles compétences.</p>
      </div>
    </div>
    <a href="/documents/cv_perou_timeo.pdf" target="_blank" class="w-fit px-6 py-3 rounded-lg shadow-box overflow-hidden duration-150 border-white dark:border-[#aaaaaa] border hover:bg-[#424242] dark:hover:bg-[#aaaaaa]">Mon CV</a>
  </section>

  <section id="final" class="w-full flex flex-col items-center gap-8 px-6 py-12">
    <h2 class="text-orange">Intéressé ?</h2>
    <p class="text-white text-center lg:w-1/2 dark:text-black transition duration-150">Dans ma poursuite en 3e année d'études, je recherche des stages pour l'année 2026. Si mon profil vous intéresse, je serai ravi de discuter avec vous de notre potentielle collaboration.</p>
    <Button variant="primary" link="/contact" caption="Me contacter" />
  </section>
</template>

<style>
</style>
