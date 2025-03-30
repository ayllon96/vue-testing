<template>
<div>
    <button @click="greetParent">Saludar al padre</button>
    <p v-if="parentMessage">Padre dice: {{ parentMessage }}</p>
</div>
</template>

<script setup>
import { inject } from 'vue'

const parentMessage = inject('parentMessage')
const receiveChildMessage = inject('receiveChildMessage')

const greetParent = () => {
receiveChildMessage('¡Hola papá!') 
}
</script>