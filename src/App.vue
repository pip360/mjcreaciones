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
.slider{
  display: flex;
  justify-content: center;
  overflow: hidden;
  animation: cambio 10s infinite
  alternate linear;
  list-style: none;
  
}
@keyframes cambio{
  0%{margin-left: 0;}
  20%{margin-left: 0;}

  25%{margin-left: -100;}
  45%{margin-left: -100;}

  50%{margin-left: -200;}
  70%{margin-left: -200;}

  75%{margin-left: -300;}
  100%{margin-left: -300;}
}


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
