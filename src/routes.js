import FormData from './pages/FormProductos.vue'
import PrintData from './pages/ProductosData.vue'
import Details from './pages/DetailsProducto.vue'

import personal from './pages/FormPersonal.vue'
import DetailsPerso from './pages/DetailsPersonal.vue'
import PersonalData from './pages/PersonalData.vue'

import RegisLog from './pages/FormLogin.vue'

import home from './pages/HomeAll.vue'
import formulario from './pages/FormData.vue'
import añadir from './pages/AñadirAll.vue'


export const routes = [

    {path:'/prod', component:FormData},
    {path:'/print', component:PrintData},
    {path:'/detailsprodu', component:Details},

    {path:'/personal',component:personal},
    {path:'/persoData', component:PersonalData},
    {path:'/detailso', component:DetailsPerso},


    {path:'/regislog', component:RegisLog},

    {path:'/',component:home},
    {path:'/formulario',component:formulario},
    {path:'/añadir',component:añadir},

    

]