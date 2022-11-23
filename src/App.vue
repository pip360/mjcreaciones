<template>
  <v-app>
    <div>
      <NavbarAll/>
      <router-view></router-view>
    </div>
    <div class="app">
        <carousel>
          <carousel-slide v-for="(slide,index) in slides" :key="slide" :index="index"></carousel-slide>
          <img :src="slide" />
        </carousel>
      
    </div>
  </v-app>
</template>


<script>
import NavbarAll from './components/NavbarAll.vue';
import carousel from './components/SliderFotos.vue';
import CarouselSlide from './components/CarouselSlide.vue';


export default {
    data() {
        return {
            slides: [
                'https://picsum.photos/id/237/600/350',
                'https://picsum.photos/id/236/600/350',
                'https://picsum.photos/id/235/600/350',
                'https://picsum.photos/id/234/600/350',
                'https://picsum.photos/id/233/600/350',
                'https://picsum.photos/id/232/600/350',
            ],
            visibleSlide: 0,
        }
    },

  components: {
    NavbarAll,
    carousel,
    CarouselSlide,
  },
}
//   data: () => ({
//     //
//   }),
// };
</script>

<style>
.app {
  display: flex;
  justify-content: center;
}
</style>
