import { Table, Model, Column, DataType, HasMany, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { Optional } from "sequelize";
import { Person } from "./person";

interface ComedorAttributes {
    id: number;
    nombre: string;
    direccion?: string;
    telefono: string;
    createdAt: Date;
    updatedAt: Date;
}

interface ComedorCreationAttributes extends Optional<ComedorAttributes, 'id'> {}

@Table({
    tableName: "Comedor",
    timestamps: true, // Asegura que Sequelize maneje los timestamps
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

    @CreatedAt
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,  // Valor por defecto
    })
    createdAt!: Date;

    @UpdatedAt
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,  // Valor por defecto
    })
    updatedAt!: Date;
}
