import home from './pages/CatalogoAll.vue'
/* import singup from './pages/SingupAll.vue' */
import formulario from './pages/FormData.vue'
import iniciosesion from './pages/LoginRegistro.vue'



export const routes = [
    {path:'/',component:home},
  /*   {path:'/singup',component:singup}, */
    {path:'/formulario',component:formulario},
    {path:'/iniciosesion',component:iniciosesion}
]