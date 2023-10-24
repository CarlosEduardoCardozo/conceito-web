import api from "../plugins/api";

class CamisetasTop {
  async getAllCamisetas() {
    const response = await api.get("/camisetas/");
    return response.data;
  }
}

export default new CamisetasTop();
