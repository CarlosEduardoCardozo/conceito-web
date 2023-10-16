<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      availableSizes: ["S", "M", "L", "XL"],
      selectedSize: "S", // Tamanho padrão
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    addToCart() {
      // Adicione a lógica para adicionar o produto ao carrinho aqui
      // Você pode usar Vuex ou um sistema de gerenciamento de estado para fazer isso.
    },
  },
};
</script>
<template>
  <div>
    <HelloWorld />
    <div class="product-detail">
      <div class="product-image">
        <img
          src="https://cdn.awsli.com.br/1347/1347698/produto/224865057/joker-suf-gang-preto-frente-n6les101s8.jpg"
          alt="Nome do Produto"
        />
      </div>
      <div class="product-info">
        <h2>Calça Jeans Carpenter Joker Blue</h2>
        <p class="price">R$ 159,90</p>
        <p class="description">
          Esta é uma descrição detalhada do produto. Aqui você pode incluir
          informações sobre o material, tamanho, estilo e outros detalhes
          relevantes.
        </p>
        <label>Tamanho:</label>
        <div class="size-buttons">
          <button
            v-for="size in availableSizes"
            :key="size"
            @click="selectSize(size)"
            :class="{ selected: selectedSize === size }"
          >
            {{ size }}
          </button>
        </div>
        <button @click="addToCart">Adicionar ao Carrinho</button>
        <button class="buy-button" @click="addToCart">Comprar Agora</button>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");

.product-detail {
  display: flex;
  padding: 20px;
  border-radius: 5px;
  margin: 7%;
  margin-top: 10px;
}
.product-image {
  flex: 1;
  max-width: 100%;
}

.product-image img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.product-info {
  flex: 1;
  padding: 20px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
}

.product-info h2 {
  font-size: 24px;
}

.price {
  font-size: 20px;
  color: #818181; /* Cor do preço */
}

.description {
  margin-top: 10px;
}

button {
  background: #5c5c5c; /* Cor de fundo do botão */
  color: #fff; /* Cor do texto do botão */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
}

.size-buttons {
  margin: 5px;
  opacity: 0.5;
}

.buy-button {
  background: #ff8c00; /* Cor de fundo do botão de compra (exemplo: laranja) */
  color: #fff; /* Cor do texto do botão de compra */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px; /* Espaçamento superior para separá-lo dos botões de tamanho */
}

.buy-button:hover {
  background: #ff6a00; /* Cor de fundo do botão de compra no hover */
}

button:hover {
  background: #2b2b2b; /* Cor de fundo do botão no hover */
}
</style>
