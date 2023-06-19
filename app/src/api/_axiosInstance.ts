import axios, { AxiosInstance } from "axios";

const ApiUrl: string = "https://test-production-3036.up.railway.app/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: ApiUrl,
  timeout: 20000,
  withCredentials: true,
});

export default axiosInstance;
