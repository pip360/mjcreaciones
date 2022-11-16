<!-- <template>
    <div class="app">
        <carousel>
            <carousel-slide v-for="(slide, index) in slides" :key="slide" :index="index"></carousel-slide>
            <img :src="slide" />
        </carousel>
    </div>
</template>
      
    
<script>
import Carousel from './components/Carousel.vue'
import CarouselSlide from './components/CarouselSlide.vue'


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
        Carousel,
        CarouselSlide,
    }
}
</script>
    
    
<style>
.app {
    display: flex;
    justify-content: center;
}
</style> -->