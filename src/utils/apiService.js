import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    
    if (error.response) {
      console.error('Error data:', error.response.data);
      console.error('Error status:', error.response.status);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export const apiService = {
  getAuthors: async () => {
    try {
      const response = await apiClient.get('/api/authors');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch authors: ${error.message}`);
    }
  },

  getBooks: async () => {
    try {
      const response = await apiClient.get('/api/books');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch books: ${error.message}`);
    }
  },

  getBookById: async (id) => {
    try {
      const response = await apiClient.get(`/api/books/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch book: ${error.message}`);
    }
  },
};

export default apiService;
