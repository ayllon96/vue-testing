<template>
<div>
    <button @click="sendToChild">Enviar mensaje al hijo</button>
    <ChildComponent />
    <p v-if="childMessage">Hijo dice: {{ childMessage }}</p>
</div>
</template>

<script setup>
import { ref, provide } from 'vue'
import ChildComponent from './ChildComponent.vue'

const parentMessage = ref('')
const childMessage = ref('')

provide('parentMessage', parentMessage)
provide('receiveChildMessage', (msg) => {
childMessage.value = msg
})

const sendToChild = () => {
parentMessage.value = 'Hola hijo'
}
</script>