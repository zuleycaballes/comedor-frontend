declare module "my-types" {
  export interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    inventario: number;
    id_comedor: number;
    createdAt: Date;
    updatedAt: Date;
    imagen?: string;
  }

  export interface Person {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    rol: "donador" | "consumidor";
    createdAt: Date;
    updatedAt: Date;
  }
}
