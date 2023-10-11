<template>
  <nav class="navbar">
    <div class="navbar-left">
      <a href="#">Login</a>
    </div>

    <div class="navbar-logo">
      <!-- Substituir o caminho pelo URL fornecido -->
      <img
        src="https://cdn.discordapp.com/attachments/976322101818560562/1158913896795623505/logo.png?ex=651dfa2c&is=651ca8ac&hm=14a7268314f50c22520bfcf135d86bfa43f2a048cad5649b27d23dabb0c9d6c8"
        alt="Logo"
      />
    </div>

    <div class="navbar-right">
      <a href="#">Carrinho</a>
    </div>
  </nav>
</template>

<style scoped>
/* Em styles.css ou styles.scss */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap");

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ececec;
  height: 90px;
  color: black;
}

.navbar-logo {
  flex: 1;
  text-align: center;
}

.navbar-logo img {
  max-width: 120px;
}

.navbar-left,
.navbar-right {
  flex: 1;
  text-align: center;
}

.navbar-left a,
.navbar-right a {
  color: black;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-weight: bold;
}

.navbar-left a:hover,
.navbar-right a:hover {
  text-decoration: underline;
}
</style>
