import axiosInstance from "./_axiosInstance";

export default function useCargoApi() {
  const path = "/cargos";

  // GET methods
  async function listarCargos() {
    try {
      const response = await axiosInstance.get(`${path}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  return {
    // GET methods
    listarCargos,
  };
}
