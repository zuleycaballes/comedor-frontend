import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import { Comedor } from './comedor';

interface ProductAttributes {
    id: number;
    nombre: string;
    descripcion: string;
    inventario: number ;
    id_comedor: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

@Table({
    tableName: "Products",
    timestamps: true // Ensure timestamps are enabled
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes> {
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;
    
    @ForeignKey(() => Comedor)
    @Column
    id_comedor!: number;


    @BelongsTo(() => Comedor) // Define relationship with 'Comedor'
    comedor!: Comedor;

    @Column
    nombre!: string;

    @Column({
        type: DataType.STRING
    })
    descripcion?: string;

    @Column
    inventario!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}