import axios from "axios";
import { Product } from "my-types";

const api = axios.create({
  baseURL: "http://localhost:3000", 
  headers: { "Content-Type": "application/json" },
});

// Función para obtener todos los productos desde el backend
export const getAllProducts = async (): Promise<Product[]> => {
  const res = await api.get("/api/product"); // Realiza una solicitud GET a la API
  return res.data.payload; // Retorna los datos obtenidos
};

// Función para crear un nuevo producto en el backend
export const createProduct = async (
  productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'> // Excluye ciertos campos del tipo Product
): Promise<Product> => {
  console.log("Sending to backend:", productData); // Log para depuración
  const res = await api.post("/api/product", productData); // Realiza una solicitud POST con los datos del producto
  return res.data.payload; // Retorna el producto creado
};

// Función para actualizar un producto existente en el backend
export const modifyProduct = async (id: number, data: Partial<Product>) => {
  const res = await api.patch(`/api/product/${id}`, data); // Realiza una solicitud PATCH con los datos a actualizar
  return res.data.payload; // Retorna el producto actualizado
};

// Función para eliminar un producto del backend
export const deleteProduct = async (id: number) => {
  try {
    const res = await api.delete(`/api/product/${id}`); // Realiza una solicitud DELETE
    return res.data.payload; // Retorna el resultado de la eliminación
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

// Función para obtener un producto específico por su ID
export const getProductById = async (id: number): Promise<Product> => {
  const res = await api.get(`/api/product/${id}`); // Realiza una solicitud GET para un producto específico
  return res.data.payload; // Retorna el producto obtenido
};