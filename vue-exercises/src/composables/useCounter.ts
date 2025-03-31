import { ref, watch } from 'vue'

export default function useCounter(initialValue = 0, max = 10, min = 0) {
  const count = ref(initialValue)
  const showIncrease = ref(true)
  const showDecrease = ref(true)

  watch(count, (newValue) => {
    showIncrease.value = newValue < max
    showDecrease.value = newValue > min
  })

  function increment() {
    if (count.value < max) {
      count.value++
    }
  }

  function decrement() {
    if (count.value > min) {
      count.value--
    }
  }

  function reset() {
    count.value = initialValue
  }

  return {
    count,
    showIncrease,
    showDecrease,
    increment,
    decrement,
    reset,
  }
}
