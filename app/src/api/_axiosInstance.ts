import axios, { AxiosInstance } from "axios";

const ApiUrl: string = "http://localhost:3000";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: ApiUrl,
  timeout: 20000,
  withCredentials: true,
});

export default axiosInstance;
