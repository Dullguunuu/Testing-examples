import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchTodos = async () => {
  try {
    return await axios.get(`${BASE_URL}/todos`);
  } catch (e) {
    return [];
  }
};
