<template>
  <div>
    <div class="card" v-if="productos != undefined">
      <h5 class="card-header">{{ productos.nombre }}</h5>
      <div class="card-body">
        <div class="card-text">
          <p>Codigo Producto : {{productos.codigo}}</p>
          <p>Precio : {{productos.precio}}</p>
        </div>
       
      </div>
    </div>

    <div v-else class="alert alert-danger" role="alert">
      No hay datos disponibles
    </div>
    <router-link to="/print" class="btn btn-primary mt-3">Volver</router-link>
  </div>
</template>

<script>
/* import {computed} from 'vue' */
/* import {useStore} from 'vuex' */
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import axios from 'axios'

export default {
  setup(){
    /* const store = useStore() */
    const route = useRoute()
    const productos = ref("")

    /* const persona = computed(()=>{ */
      const index = route;
      /* return store.getters.getPersona(index);
    }) */
    axios.get('https://creaciones-maria-jose-default-rtdb.firebaseio.com/producto.json'+index+'.json')
    .then(res => {
      console.log(res)
      productos.value = res.data
    })
    .catch(error => console.log(error))
    return {productos}
  }
  // computed: {
  //   persona() {
  //     const index = this.$route.params.index;
  //     return this.$store.getters.getPersona(index);
  //   },
  // },
};
</script>