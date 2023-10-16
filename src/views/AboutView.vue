<script>
import ProductList from "../components/ProductList.vue";
import HelloWorld from "../components/HelloWorld.vue";

export default {
  components: {
    ProductList,
    HelloWorld,
  },
};
</script>
<template>
  <div class="home">
    <HelloWorld />
    <ProductList />
  </div>
</template>
