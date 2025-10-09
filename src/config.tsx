import axios from "axios";

// const baseApiUrl = "http://localhost/php-react-api/api/";
const baseApiUrl = "http://localhost/php-react-api/api/";
const baseUrl = "http://localhost/php-react-api/";
export {baseUrl};

const api = axios.create({
    baseURL: baseApiUrl,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer `
    }
});

export default api;