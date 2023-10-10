<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">$ {{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object, // Recebe o objeto do produto como propriedade
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  margin: 10px;
  max-width: 200px;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-name {
  font-size: 18px;
  margin: 10px 0;
}

.product-price {
  font-size: 16px;
  color: #e91e63;
}
</style>
