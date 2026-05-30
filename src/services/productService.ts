import type { Product } from "../types/product";

const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts(): Promise<Product[]> {
  console.log(API_URL);

  const response = await fetch(`${API_URL}/products`);

  const data: Product[] = await response.json();

  return data;
}
