import axios from "axios"; 
import { Comedor } from "my-types";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

// Función para realizar el login.
// Recibe un nombre de usuario y contraseña, y realiza una solicitud POST al endpoint correspondiente.
export const login = async (username: string, password: string) => {
    return axios.post("/api/comedor/login", { username, password });
};

// Función para obtener un comedor por su ID.
// Realiza una solicitud GET al endpoint correspondiente y devuelve el payload de la respuesta.
export const getComedorById = async (id: number): Promise<Comedor> => {
    const res = await axios.get(`http://localhost:3000/api/comedor/${id}`);
    return res.data.payload; 
};

