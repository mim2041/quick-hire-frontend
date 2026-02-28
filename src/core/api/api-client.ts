import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.trim() || "http://localhost:9001";
const API_TIMEOUT = 30000;

export interface SimpleAxiosRequestConfig extends AxiosRequestConfig {
  skipAuth?: boolean;
}

class RestAPI {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_TIMEOUT,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => Promise.reject(error),
    );
  }

  get = <T = unknown>(
    url: string,
    config?: SimpleAxiosRequestConfig,
  ): Promise<T> =>
    this.axiosInstance.get<T>(url, config).then((res) => res.data);

  post = <T = unknown>(
    url: string,
    payload?: unknown,
    config?: SimpleAxiosRequestConfig,
  ): Promise<T> => {
    const isFormData = typeof FormData !== "undefined" && payload instanceof FormData;
    const mergedConfig: SimpleAxiosRequestConfig = {
      ...config,
      headers: {
        ...(isFormData ? { "Content-Type": undefined } : {}),
        ...config?.headers,
      },
    };
    return this.axiosInstance.post<T>(url, payload, mergedConfig).then((res) => res.data);
  };
}

export const api = new RestAPI();
export const { get, post } = api;

export default api;
