<template>
    <div class="catalog-page">
      <h1>Our Products</h1>
      <router-link to="/" class="nav-button">← Back to Home</router-link>
      <div class="products-grid">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
          @add-to-cart="addToCart(product)"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ProductCard from '@/components/ProductCard.vue';
  import { products } from '@/data/mock';
  
  export default defineComponent({
    name: 'CatalogView',
    components: {
      ProductCard
    },
    data() {
      return {
        products
      };
    },
    methods: {
      addToCart(product: any) {
        alert(`Added ${product.title} to cart!`);
        // In a real app, you would dispatch to a store or manage state here
      }
    }
  });
  </script>
  
  <style scoped>
  .catalog-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px 0;
  }
  
  .nav-button {
    display: inline-block;
    margin-bottom: 20px;
    padding: 8px 16px;
    background-color: #f0f0f0;
    color: #2c3e50;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }
  
  .nav-button:hover {
    background-color: #e0e0e0;
  }
  </style>