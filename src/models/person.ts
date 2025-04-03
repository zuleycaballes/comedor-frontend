import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import { Comedor } from './comedor';

interface PersonAttributes{
    id: number;
    id_comedor: number;
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    rol: "donador" | "consumidor";
}

interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'>{}

@Table ({
    tableName: "People"
})

export class Person extends Model<PersonAttributes, PersonCreationAttributes>{
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;

    @ForeignKey(() => Comedor)  // llave foranea
    @Column
    id_comedor!: number;

    @BelongsTo(() => Comedor)  // define que la relacion es con 'Comedor'
    comedor!: Comedor;
    
    @Column
    nombre!: string;

    @Column
    apellido!: string;

    @Column
    edad!: number;

    @Column({
        type: DataType.STRING
    })
    email?: string;

    @Column
    rol!: "donador" | "consumidor";

    @CreatedAt
    @Column
    createdAt!: Date;
    
    @UpdatedAt
    @Column
    updatedAt!: Date;
}