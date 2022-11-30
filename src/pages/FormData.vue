<template>
  <div>
    <h3>Inicio de sesion</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">

        <div class="form-group">
          <label for="formGroupExampleInput">E-mail</label>
          <input
            v-model="email"
            type="text"
            class="form-control"
            placeholder="aagudelo@elemail.com"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Contraseña</label>
          <input
            v-model="password"
            type="text"
            class="form-control"
            placeholder="*********"
          />
        </div>
        
        <button class="btn btn-primary" @click="addPersona">
          A&ntilde;adir
        </button>
      </div>
    </div>
  </div>
</template>


<script>
/* eslint-disable*/
import {ref} from 'vue'
/* import {useStore} from 'vuex' */
/* import {useRouter} from 'vue-router' */
import axios from 'axios'
export default {
  setup(){
    
    const password = ref("")
    const email = ref("")
    
    
    function addPersona(){
      if(email.value != '' && password.value != ""){
        const persona = {
          email:email.value,
          password:password.value,
        }
       /*  store.dispatch("addPersona", persona);
        router.push('/print') */
        axios.post('https://creaciones-maria-jose-default-rtdb.firebaseio.com/persona.json',persona)
      
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    }

    return{email, password,addPersona}
  }
  // data() {
  //   return {
  //     nombre: "",
  //     email: "",
  //     aporte: "",
  //   };
  // },
  // methods: {
  //   addPersona() {
  //     if (this.nombre != "" && this.email != "") {
  //       const persona = {
  //         nombre: this.nombre,
  //         email: this.email,
  //         aporte: this.aporte,
  //       };
  //       this.$store.dispatch("addPersona", persona);
  //       this.$router.push('/print')
  //     }
  //   },
  // },
};
</script>

<style>

</style>