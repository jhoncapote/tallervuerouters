import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  Inicioview  from '../views/inicioView.vue'
//taller admin
import  Create  from '../views/administrador/productos/create.vue'
import  Index from '../views/administrador/productos/index.vue'
import  Update  from '../views/administrador/productos/update.vue'
import  Usuario  from '../views/administrador/dashboardAdmin.vue'
//usuario
import  Rol  from '../views/usuario/login/rol.vue'
import  Inicio  from '../views/usuario/login/iniciosecion.vue'

import  usuarios  from '../views/usuario/dashboardUsurio.vue'

Vue.use(VueRouter)

const routes = [
  //taller
   {
    path: '/Create',
    name: 'Create',
    component: Create
   },
   {
    path: '/Index',
    name: 'Index',
    component: Index
   },
   {
    path: '/Update',
    name: 'Update',
    component: Update
   },
   {
    path: '/Usuario',
    name: 'Usuario',
    component: Usuario

   },


   {
    path: '/usuarios',
    name: 'usuarios',
    component: usuarios
   },
   {
    path: '/Rol',
    name: 'Rol',
    component: Rol
   },
   {
    path: '/Inicio',
    name: 'Inicio',
    component: Inicio
   },


   {
    path: '/Inicioview',
    name: 'Inicioview',
    component: Inicioview
   },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
