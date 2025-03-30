<template>
<div>
    <ChildComponent 
    @greet="(msg) => childMessage = msg" 
    />
    <p v-if="childMessage">Hijo dice: {{ childMessage }}</p>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const childMessage = ref('')

</script>