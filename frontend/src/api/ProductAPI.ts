import axios from "axios";
import { Product } from "my-types";

const api = axios.create({
  baseURL: "http://localhost:3000", 
  headers: { "Content-Type": "application/json" }
});

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await api.get("/api/product"); // ahora apunta al endpoint correcto
  return res.data.payload;
};