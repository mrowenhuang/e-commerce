import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function login(username: string, password: string) {
  console.log(username);
  console.log(password);

  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
}
