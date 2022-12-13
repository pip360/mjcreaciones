<template>
    <div>
      <h3>A&ntilde;adir personal</h3>
  
      <div class="card" style="width: 35rem">
        <div class="card-body">
          <h5 class="card-title">Datos Personal</h5>
  
          <div class="form-group">
            <label for="formGroupExampleInput">E-Mail</label>
            <input
              v-model="usuario"
              type="text"
              class="form-control"
              placeholder="Armando Casas"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Contraseña</label>
            <input
              v-model="password"
              type="text"
              class="form-control"
              placeholder="aagudelo@email.com"
            />
          </div>
          <button class="btn btn-primary" @click="addPersonal">
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
      
      const usuario = ref("")
      const password = ref("")
      
      
      function addPersonal(){
        if(usuario.value != '' && password.value != ""){
          const personal = {
            usuario:usuario.value,
            password:password.value,
          }
         /*  store.dispatch("addPersona", persona);
          router.push('/print') */
          axios.post('https://creaciones-maria-jose-default-rtdb.firebaseio.com/personal.json',personal)
        
          .then(res => console.log(res))
          .catch(error => console.log(error))
        }
      }
  
      return{usuario, password,addPersonal}
    }
  };
  </script>