import axios from "axios";
import { Person } from "my-types";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export const getAllPeople = async (): Promise<Person[]> => {
  const response = await api.get("/api/person");
  return response.data.payload;
};

export const getPersonById = async (id: number): Promise<Person> => {
    
  const response = await api.get(`/api/person/${id}`);
  return response.data.payload;
};

export const createPerson = async (personData: Omit<Person, 'id' | 'createdAt' | 'updatedAt' | 'id_comedor'>): Promise<Person> => {
    console.log("Sending to backend:", personData);
  const response = await api.post("/api/person", personData); 
  return response.data.payload;
};

export const updatePerson = async (id: number, person: Partial<Person>): Promise<Person> => {
  const response = await api.patch(`/api/person/${id}`, person); 
  return response.data.payload;
};

export const deletePerson = async (id: number): Promise<void> => {
  await api.delete("/api/person", { data: { id } }); 
};

export const login = async (username: string, password: string) => {
  return axios.post("/api/comedor/login", { username, password });
};