const API_URL = import.meta.env.VITE_API_URL;

export async function login(username: string, password: string) {
  console.log(username);
  console.log(password);

  const response = await fetch(`${API_URL}/auth/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return response.json();
}
