<template>
    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading">Conectate con nuestras redes sociales!</strong>
  
          <v-spacer></v-spacer>
  
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
  
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>CREACIONES MARIA JOSE</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </template>
  
  <script>
    export default {
      data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }),
    }
  </script>

<style>
.v-application .teal {
    background-color: #e69ded !important;
    border-color: #e671e8 !important;
}

</style>