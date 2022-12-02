import home from './pages/CatalogoAll.vue'
/* import singup from './pages/SingupAll.vue' */
import formulario from './pages/FormData.vue'
import iniciosesion from './pages/LoginRegistro.vue'
import añadir from './pages/AñadirAll.vue'
import detalles from './pages/DetallesAll.vue'
import print from './pages/PrintAll.vue'



export const routes = [
    {path:'/',component:home},
  /*   {path:'/singup',component:singup}, */
    {path:'/formulario',component:formulario},
    {path:'/iniciosesion',component:iniciosesion},
    {path:'/añadir',component:añadir},
    {path:'/detalles',component:detalles},
    {path:'/print',component:print}
]