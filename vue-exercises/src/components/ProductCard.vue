<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '@/data/mock'

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  (e: 'add-to-cart'): void
}>()

const priceFixed = computed(() => props.product.price.toFixed(2))

const addToCart = () => {
  emit('add-to-cart')
}
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" class="product-card__image" />

    <div class="product-card__info">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>

      <div class="product-card__actions">
        <span>${{ priceFixed }}</span>
        <button @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;

  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &__info {
    padding: 16px;

    h3 {
      margin: 0 0 8px 0;
      font-size: 1.2rem;
    }

    p {
      margin: 0 0 12px 0;
      color: #666;
      font-size: 0.9rem;
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-weight: bold;
    }

    button {
      background: #42b983;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background: #3aa876;
      }
    }
  }
}
</style>
