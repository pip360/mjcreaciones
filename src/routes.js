

import home from './pages/HomeAll.vue'

import singin from './pages/FormData.vue'
import personal from './pages/FormPersonal.vue'
import FormData from './pages/FormProductos.vue'
import RegisLog from './pages/FormUsuarios.vue'

import PrintData from './pages/ProductosData.vue'
import PersonalData from './pages/PersonalData.vue'

import Details from './pages/DetailsProducto.vue'
import DetailsPerso from './pages/DetailsPersonal.vue'



export const routes = [

/*     {path:'/prod', component:FormData},
    {path:'/print', component:PrintData},
    {path:'/detailsprodu', component:Details},

    
    {path:'/persoData', component:PersonalData},
    {path:'/detailso', component:DetailsPerso},

    {path:'/log', component:LoginAll}, 
     */

    {path:'/',component:home},
    /* {path:'/formulario',component:formulario},
    {path:'/añadir',component:añadir}, */ 
    {path:'/print', component:PrintData},
    {path:'/singin',component:singin},
    {path:'/personal',component:personal},
    {path:'/prod', component:FormData},
    {path:'/regislog', component:RegisLog},
    {path:'/details/:index', component:Details},
    {path:'/persoData', component:PersonalData},
    {path:'/detailsPerso/:index', component:DetailsPerso},
]