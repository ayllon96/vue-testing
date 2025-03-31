<template>
  <div class="counter">
    <TheTitle>{{ title }}</TheTitle>
    <h2 v-show="belowZero">No están permitidos valores negativos</h2>
    <button @click="increment">Increase</button>
    <button v-show="!belowZero" @click="decrement">Decrease</button>
    <p :style="{ color: count >= 10 ? 'green' : 'black' }">Count is: {{ count }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TheTitle from './TheTitle.vue'

const count = ref(0)
const title = 'Counter'

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

const belowZero = computed(() => {
  return count.value < 0
})
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}

button {
  background-color: rgb(233, 26, 26);
  color: white;
  border: none;
  padding: 0.5em 1em;
  margin: 0.5em;
  cursor: pointer;
  border-radius: 0.5em;
}
</style>
