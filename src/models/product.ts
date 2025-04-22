import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import { Comedor } from './comedor';

interface ProductAttributes{
    id: number;
    nombre: string;
    descripcion: string;
    inventario: number ;
    id_comedor: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'>{}

@Table ({
    tableName: "Products"
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes>{
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;
    
    @ForeignKey(() => Comedor) // llave foranea
    @Column({
    defaultValue: 1 
    })
    id_comedor!: number;

    @BelongsTo(() => Comedor)  // define que la relacion es con 'Comedor'
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