/* eslint-disable */
<template>
  <div class="login-container">
    <div class="image-section">
      <img
        src="https://cdn.shopify.com/s/files/1/2017/7541/files/MG_5266.jpg?v=1563920115"
        alt="Imagem de fundo"
      />
    </div>
    <div class="login-section">
      <div class="login-form">
        <img
          src="../assets/logoconceito.png"
          alt="Imagem de fundo"
          class="logo"
        />
        <form @submit.prevent="login">
          <div class="input-group">
            <label for="username" class="nameform">Usuário</label>
            <input type="text" id="username" v-model="username" />
          </div>
          <div class="input-group">
            <label for="password" class="nameform">Senha</label>
            <input type="password" id="password" v-model="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Simule um login fixo (substitua pelo seu login real)
      if (this.username === "conceito.admin" && this.password === "podeco") {
        this.$router.push("/");
      } else {
        alert("Senha incorreta. Tente novamente.");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");

html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.login-container {
  display: flex;
  font-family: "Inter", sans-serif;
  height: 80%;
}

.image-section {
  flex: 1;
  background: url("https://mlg2i1jqo1iw.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://hookagency.com/wp-content/uploads/2015/11/murdered-out-dark-black-gradient.jpg")
    no-repeat center center;
  background-size: cover;
}

.logo {
  width: 160px;
}

.image-section img {
  max-width: 100%;
  height: 100%;
  display: block;
}

.login-section {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
}

.login-form {
  text-align: center;
  color: "black";
  margin: 10px;
  background: #fff;
  padding: 60px;
  border-radius: 7px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: "black";
}

.input-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  border: none;
  margin-top: 15px;
  border-bottom: 13px solid #fff;
  background: #22222228;
  color: #000;
  font-size: 16px;
  outline: none;
}

label {
  font-size: 14px;
  color: "black";
  align-items: flex-end;
  padding: 5px;
  margin: 10px;
}

button {
  background: #2e2e2e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background: #fdbc29;
  color: #fff;
}
</style>
