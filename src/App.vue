<template>
  <v-app>
    <div>
      <NavbarAll/>
      <router-view></router-view>
    </div>
    <div class="app">
      <SliderFotos @next="next"
       @prev="prev">
        <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
          <img :src="slide" :alt="slide" />
        </carousel-slide>
      </SliderFotos>
    </div>
     
      
  
  </v-app>
</template>


<script>
import NavbarAll from './components/NavbarAll.vue';
import SliderFotos from './components/SliderFotos.vue';
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
    SliderFotos,
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

.carousel {
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 500px;
  z-index: 10;
}

.btn {
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  margin: 5px 10px;
  color: #FFF;
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
}

.btn:hover {
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

.btn-next {
  top: 50%;
  right: 0;
}

.btn-prev {
  top: 50%;
  left: 0;
}

.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.carousel-slider img {
  width: 100%;
  height: 100%;
}
</style>
