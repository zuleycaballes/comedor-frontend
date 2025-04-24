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
exports.Person = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const comedor_1 = require("./comedor");
let Person = class Person extends sequelize_typescript_1.Model {
};
exports.Person = Person;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true
    }),
    __metadata("design:type", Number)
], Person.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => comedor_1.Comedor) // llave foranea
    ,
    (0, sequelize_typescript_1.Column)({
        defaultValue: 1
    }),
    __metadata("design:type", Number)
], Person.prototype, "id_comedor", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => comedor_1.Comedor) // define que la relacion es con 'Comedor'
    ,
    __metadata("design:type", comedor_1.Comedor)
], Person.prototype, "comedor", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Person.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Person.prototype, "apellido", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Person.prototype, "edad", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Person.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Person.prototype, "rol", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Person.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Person.prototype, "updatedAt", void 0);
exports.Person = Person = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "People"
    })
], Person);
