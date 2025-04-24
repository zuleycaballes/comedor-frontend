import axios from "axios";
import { Comedor } from "my-types";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export const login = async (username: string, password: string) => {
    return axios.post("/api/comedor/login", { username, password });
};

export const getComedorById = async (id: number): Promise<Comedor> => {
    const res = await axios.get(`http://localhost:3000/api/comedor/${id}`);
    return res.data.payload;
  };

