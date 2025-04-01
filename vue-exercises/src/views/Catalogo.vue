<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import TheTitle from '@/components/TheTitle.vue'
import { products } from '@/data/mock'
import { useCounterStore } from '@/stores/counterStore'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count, title, forTwo, maxValue, belowZero } = storeToRefs(counterStore)
const { increment, decrement } = counterStore

const addToCart = (product: any) => {
  alert(`Added ${product.title} to cart!`)
}
</script>

<template>
  <div class="catalog">
    <h1 class="catalog__title">Our Products</h1>
    <router-link to="/" class="catalog__nav-button">← Back to Home</router-link>

    <div class="catalog__products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart(product)"
        class="catalog__product"
      />
    </div>

    <div class="catalog__counter">
      <h2 class="catalog__counter-title">Counter on Catalog</h2>
      <div class="counter">
        <TheTitle class="counter__title">{{ title }}</TheTitle>
        <h2 class="counter__warning" v-show="belowZero">No negative values allowed</h2>
        <div class="counter__actions">
          <button
            class="counter__button counter__button--increase"
            v-show="!maxValue"
            @click="increment"
          >
            Increase
          </button>
          <button
            class="counter__button counter__button--decrease"
            v-show="!belowZero"
            @click="decrement"
          >
            Decrease
          </button>
        </div>
        <h3 class="counter__value" :class="{ 'counter__value--highlight': count >= 10 }">
          Count is: {{ count }}
        </h3>
        <h3 class="counter__double" v-show="count >= 1">Counter multiplied by 2: {{ forTwo }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$colors: (
  primary: #2c3e50,
  secondary: #42b983,
  light: #f0f0f0,
  warning: #ff4757,
);

.catalog {
  padding: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;

  &__title {
    text-align: center;
    color: map-get($colors, primary);
    margin-bottom: 1.25rem;
    font-size: 1.75rem;
  }

  &__nav-button {
    display: inline-block;
    margin-bottom: 1.25rem;
    padding: 0.5rem 1rem;
    background: map-get($colors, light);
    color: map-get($colors, primary);
    text-decoration: none;
    border-radius: 0.25rem;
    transition: background 0.2s ease;

    &:hover {
      background: map-get($colors, light);
    }
  }

  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.25rem;
    padding: 1.25rem 0;
  }

  &__counter {
    margin-top: 2.5rem;
    padding: 1.25rem;
    border-top: 0.625em solid #eee;
  }
}

.counter {
  margin-top: 1rem;
  padding: 1.25rem;
  background: #f9f9f9;
  border-radius: 0.5rem;
  text-align: center;

  &__title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  &__warning {
    color: map-get($colors, warning);
    margin: 0.5rem 0;
  }

  &__actions {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 0.625rem;
  }

  &__button {
    padding: 0.5rem 1rem;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background 0.2s ease;

    &--increase {
      background: map-get($colors, primary);

      &:hover {
        background: map-get($colors, secondary);
      }
    }

    &--decrease {
      background: map-get($colors, primary);

      &:hover {
        background: map-get($colors, secondary);
      }
    }
  }

  &__value {
    margin: 0.5rem 0;

    &--highlight {
      color: map-get($colors, secondary);
    }
  }

  &__double {
    margin: 0.5rem 0;
    color: map-get($colors, primary);
  }
}
</style>
