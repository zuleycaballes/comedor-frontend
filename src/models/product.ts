import {Table, Model, Column, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript';
import {Optional} from 'sequelize';

interface ProductAttributes{
    id: number;
    nombre: string;
    descripcion: string;
    inventario: number ;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'>{}

@Table ({
    tableName: "Products"
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes>{

    // Here, TS infers Data Type from the JS Type
    // The ! means that the variable title wont be null or undefine.
    @Column
    nombre!: string;

    // Here, we set the Data Type explicity
    // The ? means the variable can be null or undefined
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