<template>
  <div>
    <h3>A&ntilde;adir productos</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Datos Producto</h5>

        
        <div class="form-group">
          <label for="formGroupExampleInput">Codigo</label>
          <input
            v-model="codigo"
            type="text"
            class="form-control"
            placeholder="Codigo producto"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombre"
            type="text"
            class="form-control"
            placeholder="Ingrese Nombre del Producto"
          />
        </div>
        <div class="form-group">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Precio</label>
          <input
            v-model="precio"
            type="text"
            class="form-control"
            placeholder="$0000"
          />
        </div>
        <button class="btn btn-primary" @click="addProductos">
          A&ntilde;adir
        </button>
      </div>
    </div>
  </div>
</template>


<script>
/* eslint-disable*/
import {ref} from 'vue'
/* import {useStore} from 'vuex'
import {useRouter} from 'vue-router' */
import axios from 'axios'
export default {
  setup(){
    
    const codigo = ref("")
    const nombre = ref("")
    const precio = ref("")
    
    
    
    function addProductos(){
      if(nombre.value != "" && codigo.value != "" && precio.value != ""){
        const productos = {
          nombre:nombre.value,
          codigo:codigo.value,
          precio:precio.value,
          
        }
       /*  store.dispatch("addPersona", persona);
        router.push('/print') */
        axios.post('https://creaciones-maria-jose-default-rtdb.firebaseio.com/productos.json',productos)
      
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    }

    return{nombre,codigo,precio,addProductos}
  }
};
</script>