<template>
  <v-app>
    <div>
      <NavbarAll/>
      <CatalogoAll/>
      <ComponenteAll/>
      <PersonasAll/>
      <LoginAll/>
    </div>
  </v-app>
</template>

<script>
import NavbarAll from './components/NavbarAll.vue';
import CatalogoAll from './components/CatalogoAll.vue';
import ComponenteAll from './components/ComponenteAll.vue';
import PersonasAll from './components/PersonasAll.vue';
import LoginAll from './components/LoginAll.vue';

export default {
  name: 'App',

  components: {
    NavbarAll,
    CatalogoAll,
    ComponenteAll,
    PersonasAll,
    LoginAll
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
