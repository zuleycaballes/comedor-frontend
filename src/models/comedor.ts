import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";

@Table({
    tableName: "Comedores",
})
export class Comedor extends Model {
    
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
    telefono?: string;
}