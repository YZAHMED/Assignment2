export const API_BASE_URL = 'https://assignment1-tc7d.onrender.com';

export const API_ENDPOINTS = {
  AUTHORS: `${API_BASE_URL}/api/authors`,
  BOOKS: `${API_BASE_URL}/api/books`,
  BOOK_BY_ID: (id) => `${API_BASE_URL}/api/books/${id}`,
};

export default {
  API_BASE_URL,
  API_ENDPOINTS,
};
