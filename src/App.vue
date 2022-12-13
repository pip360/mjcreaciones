<template>
  <v-app>
    <div>
      <NavbarAll/>
      <router-view></router-view>
    </div>

     
      
  
  </v-app>
</template>


<script>
import NavbarAll from './components/NavbarAll.vue';



export default {
    data() {
        return {
            
        }
    },

  components: {
    NavbarAll
  },
}
//   data: () => ({
//     //
//   }),
// };
</script>

<style>

</style>
