<template>
<div>
  <v-app-bar
    color="#e69ded"
    dark
  >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="#d7b5f7--text text--accent-4"
      >
        <v-list-item :to="'/'">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <!-- <v-list-item  :to="'/formulario'">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Formulario</v-list-item-title>
        </v-list-item> -->

        <!-- <v-list-item :to="'/log'">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Login (pendiente)</v-list-item-title>
        </v-list-item>

        <v-list-item :to="'/print'">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Productos</v-list-item-title>
        </v-list-item>

        <v-list-item :to="'/persoData'">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Personal</v-list-item-title>
        </v-list-item> -->

        

          <v-list-item :to="'/singin'">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio de Sesion</v-list-item-title>
          </v-list-item>

          <v-list-item :to="'/regislog'">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registro Usuarios</v-list-item-title>
          </v-list-item>

          <v-list-item :to="'/prod'">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registro Productos</v-list-item-title>
          </v-list-item>

          <v-list-item :to="'/print'">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Productos</v-list-item-title>
          </v-list-item>

          <v-list-item :to="'/personal'">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registro Personal</v-list-item-title>
          </v-list-item>

          <v-list-item :to="'/persoData'">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Personal</v-list-item-title>
          </v-list-item>


          

          <!-- <v-list-item :to="'/detailsprodu'">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Formulario Productos</v-list-item-title>
          </v-list-item> -->
        

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</div>

</template>
      
    
<script>
       export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>
    
    
<style>

</style>