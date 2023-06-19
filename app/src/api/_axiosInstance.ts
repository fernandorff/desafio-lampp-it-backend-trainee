import axios, { AxiosInstance } from "axios";

const ApiUrl: string = "https://desafio-lampp-it-backend-trainee.vercel.app/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: ApiUrl,
  timeout: 20000,
  withCredentials: true,
});

export default axiosInstance;
