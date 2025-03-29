<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// Supports weights 200-700
import '@fontsource-variable/oswald'
import TheTitle from './components/TheTitle.vue'
import TheCounter from './components/TheCounter.vue'
</script>

<template>
  <TheCounter></TheCounter>
</template>

<style>
@import '@/assets/reset.css';
@import '@/assets/styles.css';
</style>