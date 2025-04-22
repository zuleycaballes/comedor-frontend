"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comedor = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const person_1 = require("./person");
let Comedor = class Comedor extends sequelize_typescript_1.Model {
};
exports.Comedor = Comedor;
__decorate([
    (0, sequelize_typescript_1.Column)({
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Comedor.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Comedor.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Comedor.prototype, "direccion", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Comedor.prototype, "telefono", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => person_1.Person) // Relacion con 'Person'
    ,
    __metadata("design:type", Array)
], Comedor.prototype, "personas", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        defaultValue: sequelize_typescript_1.DataType.NOW, // Valor por defecto
    }),
    __metadata("design:type", Date)
], Comedor.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        defaultValue: sequelize_typescript_1.DataType.NOW, // Valor por defecto
    }),
    __metadata("design:type", Date)
], Comedor.prototype, "updatedAt", void 0);
exports.Comedor = Comedor = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Comedor",
        timestamps: true, // Asegura que Sequelize maneje los timestamps
    })
], Comedor);
