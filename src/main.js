import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCarousel from "vue-carousel"; // Importe o VueCarousel aqui

const app = createApp(App);

app.use(router);
app.use(VueCarousel); // Use o VueCarousel aqui

app.mount("#app");
