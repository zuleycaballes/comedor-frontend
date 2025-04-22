import axios from "axios";
import { Product } from "my-types";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await api.get("/api/product");
  return res.data.payload;
};

export const createProduct = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'id_comedor'>): Promise<Product> => {
  console.log("Sending to backend:", productData);
  const res = await api.post("/api/product", productData);
  return res.data.payload;
};

export const deleteProduct = async (id: number) => {
  try {
    const res = await api.delete(`/api/product/${id}`);
    return res.data.payload;
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
