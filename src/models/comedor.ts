import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Optional } from "sequelize";
import { Person } from "./person";

interface ComedorAttributes {
    id: number;
    nombre: string;
    direccion?: string;
    telefono: string;
}
interface ComedorCreationAttributes extends Optional<ComedorAttributes, 'id'> {}

@Table({
    tableName: "Comedor",
})

export class Comedor extends Model<ComedorAttributes, ComedorCreationAttributes> {
    
    @Column({
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column
    nombre!: string;

    @Column
    direccion?: string;

    @Column
    telefono!: string;

    @HasMany(() => Person)  // Relacion con 'Person'
    personas!: Person[];
}