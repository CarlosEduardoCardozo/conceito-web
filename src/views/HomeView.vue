<script>
import HelloWorld from "../components/HelloWorld.vue";
import Navbar from "../components/CarouselPromo.vue";
import ProductGrid from "../components/ProductGrid.vue";

export default {
  components: {
    HelloWorld,
    Navbar,
    ProductGrid,
  },
};
</script>
<template>
  <div class="home">
    <HelloWorld />
    <Navbar />
    <ProductGrid />
    <ProductGrid />
    <ProductGrid />
  </div>
</template>
