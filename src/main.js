import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import {routes} from './routes';
import VueRouter from 'vue-router';


/* import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {store} from './store/index' */

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
 /*  history:createWebHistory() */
})

Vue.config.productionTip = false

new Vue ({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app');

/* const app = createApp(App)
app.use(router)
app.use(store) */