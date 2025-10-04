import axios from "axios";

// const baseApiUrl = "http://localhost/php-react-api/api/";
const baseApiUrl = "http://localhost/php-react-api/api/";

const api = axios.create({
    baseURL: baseApiUrl,
    headers: {
      "Content-Type": "application/json"
    }
});

export default api;