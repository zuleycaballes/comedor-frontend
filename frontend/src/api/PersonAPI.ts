import axios from "axios";
import { Person } from "my-types";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

// Obtiene todas las personas desde el backend
export const getAllPeople = async (): Promise<Person[]> => {
  const response = await api.get("/api/person");
  return response.data.payload;
};

// Obtiene una persona específica por su ID
export const getPersonById = async (id: number): Promise<Person> => {
  const response = await api.get(`/api/person/${id}`);
  return response.data.payload;
};

// Crea una nueva persona en el backend
export const createPerson = async (
  personData: Omit<Person, 'id' | 'createdAt' | 'updatedAt' | 'id_comedor'> // Excluye ciertos campos
): Promise<Person> => {
  console.log("Sending to backend:", personData); // Log para depuración
  const response = await api.post("/api/person", personData);
  return response.data.payload;
};

// Actualiza una persona existente en el backend
export const updatePerson = async (
  id: number,
  person: Partial<Person> // Permite enviar solo los campos que se desean actualizar
): Promise<Person> => {
  const response = await api.patch(`/api/person/${id}`, person);
  return response.data.payload;
};

// Elimina una persona en el backend por su ID
export const deletePerson = async (id: number): Promise<void> => {
  await api.delete("/api/person", { data: { id } }); // Envia el ID como parte del cuerpo de la solicitud
};

// Realiza el login enviando las credenciales al backend
export const login = async (username: string, password: string) => {
  return axios.post("/api/comedor/login", { username, password }); // Retorna la respuesta completa
};