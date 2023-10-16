<template>
  <div class="shop">
    <div class="sidebar">
      <h2>Categorias</h2>
      <ul>
        <li @click="filterProducts('Todos')">Todos</li>
        <li @click="filterProducts('Roupas')">Roupas</li>
        <li @click="filterProducts('Calçados')">Calçados</li>
        <li @click="filterProducts('Acessórios')">Acessórios</li>
      </ul>
    </div>
    <div class="product-list">
      <ProductGrid
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductGrid from "./ProductGrid.vue";
export default {
  components: {
    ProductGrid,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Camiseta Estilosa",
          category: "Roupas",
          price: 29.99,
          image: "product1.jpg",
        },
        {
          id: 2,
          name: "Tênis Esportivo",
          category: "Calçados",
          price: 59.99,
          image: "product2.jpg",
        },
        {
          id: 3,
          name: "Bolsa Elegante",
          category: "Acessórios",
          price: 39.99,
          image: "product3.jpg",
        },
        // Adicione mais produtos com diferentes categorias
      ],
      selectedCategory: "Todos",
    };
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === "Todos") {
        return this.products;
      } else {
        return this.products.filter(
          (product) => product.category === this.selectedCategory
        );
      }
    },
  },
  methods: {
    filterProducts(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style>
.shop {
  display: flex;
  align-items: flex-start;
  background-color: #f0f0f0;
  padding: 20px;
}

.sidebar {
  width: 200px;
  background-color: #fff;
  padding: 20px;
  border-right: 1px solid #ccc;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  cursor: pointer;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 20px;
}
</style>
