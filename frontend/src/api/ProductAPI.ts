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

export const createProduct = async (product: Omit<Product, "id">) => {
  const res = await api.post("/api/product", product);
  return res.data.payload;
};

export const updateProduct = async (id: number, data: Partial<Product>) => {
  const res = await api.patch(`/api/product/${id}`, data);
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
