<template>
  <v-carousel :show-arrows="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://nerako.co/wp-content/uploads/2022/10/dreamlandmujer2-1.webp',
          },
          {
            src: 'https://nerako.co/wp-content/uploads/2022/08/fasfwef2211ee.jpg',
          },
          {
            src: 'https://nerako.co/wp-content/uploads/2022/08/WOOCOMMERCE_Mesa-de-trabajo-1-11-scaled.jpg',
          },
          
        ],
      }
    },
  }
</script>