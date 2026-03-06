<script setup>
  import InfosCard from '@/components/InfosCard.vue';
</script>

<template>
  <div class="h-[10dvh]"></div>
  <section class="w-full text-center lg:px-16 lg:py-16 flex flex-col gap-4">
    <h2>Intéressé ?</h2>
    <p>Dans ma poursuite en 3e année d'études, je recherche des stages de toute durée (format alternance s'il y a cours) pour l'année courante. Si mon profil vous intéresse, je serai ravi de discuter avec vous de notre potentielle collaboration.</p>
  </section>

  <section id="infos" class="w-full min-h-[50dvh] lg:px-16 lg:py-8 flex grow flex-col gap-8 justify-center items-center">
    <h3>Me contacter</h3>
    <div class="w-full flex flex-col lg:grid lg:grid-cols-2 gap-6 py-6 lg:py-0 lg:px-8">
      <div class="w-full flex flex-col items-center gap-6">
        <h4>Mes informations</h4>
        <InfosCard
          name="Téléphone"
          value="+33 6 41 97 65 84"
          link="tel:+33641976584"
          image="phone.svg"
        />
        <InfosCard
          name="Email"
          value="timeo.perou@etu.univ-smb.fr"
          link="mailto:timeo.perou@etu.univ-smb.fr"
          image="email.svg"
        />
        <InfosCard
          name="CV"
          value="Format PDF - Version Web"
          link="/documents/cv_perou_timeo.pdf"
          image="document.svg"
        />
      </div>
      <div class="w-full flex flex-col items-center gap-6">
        <h4>Mes liens</h4>
        <InfosCard
          name="Linkedin"
          value="Timéo Pérou"
          link="https://www.linkedin.com/in/tim%C3%A9o-perou-984475298/"
          image="linkedin.svg"
        />
        <InfosCard
          name="GitHub"
          value="CestVraimentTropDrole"
          link="https://github.com/CestVraimentTropDrole"
          image="github.svg"
        />
      </div>
    </div>
  </section>
</template>
