<template>
  <v-app>
    <div>
      <NavbarAll/>
      <CatalogoAll/>
      <ComponenteAll/>
      <PersonasAll/>
    </div>
  </v-app>
</template>

<script>
import NavbarAll from './components/NavbarAll.vue';
import CatalogoAll from './components/CatalogoAll.vue';
import ComponenteAll from './components/ComponenteAll.vue';
import PersonasAll from './components/PersonasAll.vue';

export default {
  name: 'App',

  components: {
    NavbarAll,
    CatalogoAll,
    ComponenteAll,
    PersonasAll
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
