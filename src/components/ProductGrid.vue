<template>
  <div>
    <h2>oi</h2>
    <div class="product-grid">
      <div
        class="product-card"
        v-for="(product, index) in products"
        :key="index"
      >
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCarousel.vue";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          name: "Product 1",
          image:
            "https://images.tcdn.com.br/img/img_prod/690339/180_camiseta_high_tee_henge_black_10377_1_cfe13c53a5195b4e2a7bb7847d5d18b2.jpg",
          price: 19.99,
        },
        {
          name: "Product 2",
          image:
            "https://images.tcdn.com.br/img/img_prod/690339/180_camiseta_high_tee_henge_black_10377_1_cfe13c53a5195b4e2a7bb7847d5d18b2.jpg",
          price: 29.99,
        },
        {
          name: "Product 3",
          image:
            "https://images.tcdn.com.br/img/img_prod/690339/180_camiseta_high_tee_henge_black_10377_1_cfe13c53a5195b4e2a7bb7847d5d18b2.jpg",
          price: 39.99,
        },
        {
          name: "Product 3",
          image:
            "https://images.tcdn.com.br/img/img_prod/690339/180_camiseta_high_tee_henge_black_10377_1_cfe13c53a5195b4e2a7bb7847d5d18b2.jpg",
          price: 39.99,
        },
        // Adicione mais produtos conforme necessário
      ],
    };
  },
};
</script>

<style scoped>
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
