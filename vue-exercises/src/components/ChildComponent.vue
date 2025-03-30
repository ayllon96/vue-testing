<template>
<div>
    <button @click="greetParent">Saludar al padre</button>
</div>
</template>
  
<script setup>
  const emit = defineEmits(['greet'])
  const greetParent = () => emit('greet', '¡Hola papá!')
</script>