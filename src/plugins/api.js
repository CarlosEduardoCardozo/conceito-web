import axios from "axios";

const api = axios.create({
  baseURL: `https://projetos-projeto-pi-x10k-dev.fl0.io/api/`,
  // baseURL: 'http://192.168.0.17:19003/api/',
});

export default api;
