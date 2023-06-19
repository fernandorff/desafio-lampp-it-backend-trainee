import axiosInstance from "./_axiosInstance";

export default function useOrdemAlfabeticaApi() {
  const path = "/ordem-alfabetica?";

  // GET methods
  async function verificarOrdemAlfabetica(listaDePalavras: String[]) {
    try {
      const parametros = listaDePalavras
        .map((palavra) => `request=${palavra}`)
        .join("&");
      const response = await axiosInstance.get(`${path}${parametros}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  return {
    // GET methods
    verificarOrdemAlfabetica,
  };
}
