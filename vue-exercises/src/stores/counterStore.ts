import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const title = ref('Counter')

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  const belowZero = computed(() => {
    return count.value < 0
  })

  const forTwo = computed(() => {
    return count.value * 2
  })

  const maxValue = computed(() => {
    return count.value === 10
  })

  watch(count, (newValue) => {
    if (newValue === 0) {
      title.value = 'You are at the minimum value'
    } else if (newValue === 10) {
      title.value = 'You are at the maximum value'
    } else if (newValue >= 1 && newValue <= 9) {
      title.value = 'You are on rhe right track'
    }
  })

  return {
    count,
    increment,
    decrement,
    belowZero,
    forTwo,
    maxValue,
    title,
  }
})
