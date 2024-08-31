import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiClient.interceptors.request.use(
  async function (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> {
    // Modify the request config if needed
    return config;
  },
  function (error: AxiosError): Promise<AxiosError> {
    // Handle the request error
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    // Handle the response
    return response;
  },
  async function (error: AxiosError): Promise<AxiosError> {
    // Handle the response error
    return Promise.reject(error);
  }
);

export default apiClient;
