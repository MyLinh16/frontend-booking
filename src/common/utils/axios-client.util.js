import axios from 'axios';

// dùng thư viện axios 
// cấu hình tới backend
const axiosClient = axios.create({

  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  withCredentials: true,// cookie định danh
});

export default axiosClient;
