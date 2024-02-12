import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchSomeData = async () => {
  try {
    const response = await apiService.get('/albums');
    return response.data;
  } catch (error) {
    throw error;
  }
};