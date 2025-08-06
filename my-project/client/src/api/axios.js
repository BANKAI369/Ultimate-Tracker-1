import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',// Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;