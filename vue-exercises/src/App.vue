<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/catalog">Catalog</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-nav {
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
}

.main-nav a {
  margin: 0 10px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}
</style>