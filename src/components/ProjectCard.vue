<template>
  <div v-on:click="showDiv" class="min-w-full flex flex-col items-center rounded-xl bg-box/10 drop-shadow-box cursor-pointer bg-white/10 dark:bg-gray/10 hover:rotate-x-6 hover:rotate-y-6 transition duration-150">
    <div class="w-full aspect-3/2 relative">
      <img :src="`/images/${project.images[0]}`" :alt="project.name" class="w-full h-full rounded-t-xl object-cover" />
      <div v-show="project.link" class="inline-flex items-center justify-center p-2 rounded-full bg-black absolute right-2 top-2">
        <img src="/icons/open.svg" alt="Ouvrir"/>
      </div>
    </div>

    <div class="w-full flex flex-col gap-3 p-6">
      <h3>{{ project.name }}</h3>
      <p>{{ project.shortDesc }}</p>
      <div class="flex gap-3 mt-2">
        <p class="font-light bg-white/10 dark:bg-gray/10 dark:text-black p-2 rounded-sm text-white transition duration-150" v-for="tag in project.tags">{{ categories[tag] ?? tag }}</p>
      </div>
    </div>
  </div>


  <div v-show="show" v-on:click="showDiv" class="fixed w-full h-full flex justify-center items-center inset-0 bg-gray/50 z-50">
    <div class="relative w-3/4 grid grid-cols-3 aspect-video bg-white rounded-lg text-black" @click.stop>
      <button v-on:click="showDiv" class="absolute right-6 top-6 aspect-square p-2 rounded-full bg-white hover:bg-lightgray cursor-pointer drop-shadow-box transition duration-150">
        <img src="/icons/close.svg" alt="X"/>
      </button>

      <div class="col-span-2 flex flex-col items-center gap-8 p-8">
        <div class=" w-full flex flex-col gap-2">
          <div>
            <h5 class="text-sm">{{ project.date }}</h5>
            <h3>{{ project.name }}</h3>
          </div>
          <p>{{ project.longDesc }}</p>
          <div class="flex gap-2">
            <p v-for="techno in project.technos" class="font-light bg-gray p-2 rounded-sm text-white">{{ techno }}</p>
          </div>
        </div>

        <div class="w-full grid grid-cols-2 gap-6 py-4 border-t-2 border-black">
          <div class="flex flex-col gap-3">
            <h4>Apprentissages critiques</h4>
            <ul class="text-sm font-light">
              <li v-for="ac in project.competencies.ac">{{ ac }}</li>
            </ul>
          </div>
          <div class="flex flex-col gap-3">
            <h4>Composantes essentielles</h4>
            <ul class="text-sm font-light">
              <li v-for="ce in project.competencies.ce">{{ ce }}</li>
            </ul>
          </div>
        </div>

        <a :href="project.link" class="w-fit px-6 py-3 rounded-lg shadow-box overflow-hidden duration-150 bg-orange hover:bg-[#BE5C17] text-white">
          Accéder
        </a>
      </div>

      <img :src="`/images/${project.images[0]}`" :alt="project.name" class="w-full h-full col-span-1 rounded-r-lg object-cover" />
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        path: '/src/assets/images/',
        show: false,
      };
    },
    methods: {
      showDiv() {
        this.show = !this.show;
      }
    },
    props: {
      project: {
        type: Object,
        required: true
      },
      categories: { type: Object }
    }
  }
</script>
