<template>
  <div class="home">
    <header class="hero">
      <h1>Welcome to Our Store</h1>
      <p>Discover amazing products at great prices</p>
      <router-link to="/catalog" class="cta-button">Browse Products</router-link>
    </header>
    
    <section class="features">
      <div class="feature">
        <h3>Free Shipping</h3>
        <p>On orders over $50</p>
      </div>
      <div class="feature">
        <h3>30-Day Returns</h3>
        <p>No questions asked</p>
      </div>
      <div class="feature">
        <h3>24/7 Support</h3>
        <p>We're always here to help</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView'
});
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 16px;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 24px;
}

.cta-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background-color: #3aa876;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.feature {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature h3 {
  color: #2c3e50;
  margin-bottom: 8px;
}

.feature p {
  color: #666;
}
</style>