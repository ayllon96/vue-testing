<script setup lang="ts"></script>

<template>
  <div class="home">
    <section class="home__welcome-section">
      <h1 class="home__main-title">Welcome to Our Store</h1>
      <p class="home__tagline">Discover amazing products at great prices</p>
      <router-link to="/catalog" class="home__cta-button">Browse Products</router-link>
    </section>

    <section class="home__benefits">
      <div class="home__benefit-card">
        <h3 class="home__benefit-title">Free Shipping</h3>
        <p class="home__benefit-text">On orders over $50</p>
      </div>
      <div class="home__benefit-card">
        <h3 class="home__benefit-title">30-Day Returns</h3>
        <p class="home__benefit-text">No questions asked</p>
      </div>
      <div class="home__benefit-card">
        <h3 class="home__benefit-title">24/7 Support</h3>
        <p class="home__benefit-text">We're always here to help</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  &__welcome-section {
    text-align: center;
    padding: 60px 20px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 40px;
  }

  &__main-title {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 16px;
  }

  &__tagline {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 24px;
  }

  &__cta-button {
    display: inline-block;
    padding: 12px 24px;
    background: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.2s ease;

    &:hover {
      background: #3aa876;
    }
  }

  &__benefits {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  &__benefit-card {
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  &__benefit-title {
    color: #2c3e50;
    margin-bottom: 8px;
    font-size: 1.25rem;
  }

  &__benefit-text {
    color: #666;
    font-size: 0.95rem;
  }
}
</style>
