<template>
  <div>
    <h3>Lista de productos</h3>

    <ul class="list-group">
      <li v-for="(productos, i) in productos" :key="i"  class="list-group-item">
        <router-link :to="`/details/${productos.id}`">{{
          productos.nombre
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
export default {
  setup(){
    const productos = ref([])
    axios.get('https://creaciones-maria-jose-default-rtdb.firebaseio.com/productos.json',productos)
    .then(res=>{
      console.log(res)
      for(const id in res.data){
        productos.value.push({
          id:id,
          nombre: res.data[id].nombre,
          codigo: res.data[id].codigo,
          /* mail: res.data[id].email, */
          precio: res.data[id].precio,
        })
      }
    })
   .catch(error => console.log(error))
   return {productos};
  }
  /* computed: {
    personas() {
      return this.$store.getters.getPersonas;
    },
  }, */
};
</script>

<style>
div{
color-scheme: black;
}
</style>