import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-food-explorer-t2r6.onrender.com'
  // baseURL: 'http://localhost:3333'
});