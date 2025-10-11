import axios from "axios";

// const baseApiUrl = "http://roxi.com/php-react-api/api/";
// const baseUrl = "http://roxi.com/php-react-api/";
const baseApiUrl = "http://localhost/php-react-api/api/";
const baseUrl = "http://localhost/php-react-api/";
export {baseUrl};

const api = axios.create({
    baseURL: baseApiUrl,
    headers: {
      "Content-Type": "application/json"
    }
});

// ✅ Add interceptor to always attach the latest token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("bearer_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;