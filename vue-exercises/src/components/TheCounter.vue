<template>
    <div class="counter">
        <TheTitle>{{ title }}</TheTitle>
        <button @click="increment" v-show="showIncrease">Increase</button>
        <button @click="decrement" v-show="showDecrease">Decrease</button>
        <p>Count is: {{ count }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TheTitle from './TheTitle.vue'

const count = ref(1)
const title = 'Counter'
const showIncrease = ref(true)
const showDecrease = ref(true) 

watch(count, (newValue) => {
    showIncrease.value = newValue < 10
    showDecrease.value = newValue > 0
})

function increment() {
    if (count.value < 10) {
        count.value++
    }
}

function decrement() {
    if (count.value > 0) {
        count.value--
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
    background-color: rgb(233, 26, 26);
    color: white;
    border: none;
    padding: 0.5em 1em;
    margin: 0.5em;
    cursor: pointer;
    border-radius: 0.5em;
}
</style>