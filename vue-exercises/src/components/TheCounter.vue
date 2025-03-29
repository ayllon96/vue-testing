<template>
    <div class="counter">
        <TheTitle>{{ title }}</TheTitle>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <p>Count is: {{ count }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheTitle from './TheTitle.vue'

const count = ref(0)
const title = 'Counter'

function increment() {
    while (count.value < 10) {
        return count.value++
    }
}

function decrement() {
    while (count.value > 0) {
        return count.value--
    }
}
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
    display: flex;
    background-color: rgb(233, 26, 26);
    color: white;
    border: none;
    padding: 0.3em 0.5em;
    margin: 0.5em 2em;  
    text-align: center;
    text-decoration: none;
    font-size: 1em;
    cursor: pointer;
    border-radius: 0.5em;
}
</style>