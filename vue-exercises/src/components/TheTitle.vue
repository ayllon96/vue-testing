<template>
  <div>
    <h2 class="title">
      <slot></slot>
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  propTitle: String,
})
</script>

<style scoped>
.title {
  color: rgb(233, 26, 26);
  font-size: 5em;
  text-align: center;
  margin-top: 1em;
}
</style>
