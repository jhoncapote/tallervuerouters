<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/Inicioview">Inicio</router-link> |
     
      <router-link to="/Create">Create</router-link> |
       <router-link to="/Index">Create</router-link> |
        <router-link to="/Update">Create</router-link> |
         <router-link to="/Usuario">Usuario</router-link> |

           <router-link to="/Rol">Rol</router-link> |
            <router-link to="/Inicio">Inicio</router-link> |
             <router-link to="/usurios">usuarios</router-link> |


<sidebar></sidebar>

    </nav>
    <router-view/>
  </div>
</template>

<script>

import sidebar from '../src/components/sidebar.vue'

export default{
  
components:{
sidebar
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
